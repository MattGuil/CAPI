<template>
    <div id="backlogs-list">
        <div v-for="(backlog, index) in backlogs"
            class="backlog-elt"
            :key="index"
        >
            <input 
                type="text"
                :id="index"
                :class="{
                    'processed': backlog['state'] == 1,
                    'loop':  backlog['state'] == 2,
                }"
                :value="backlog['label']"
                @input="onValueChange"
            >
            <img src="../assets/icons/bin.png" @click="removeBacklog(index)">
        </div>
        <button @click="addBacklog">ajouter un backlog</button>
    </div>
</template>

<script>
export default {

data() {
    return {
        backlogs: null,
    };
},

methods: {
    onValueChange(event) {
        this.backlogs[event.target.id]['label'] = event.target.value;
    },
    addBacklog() {
        if (this.backlogs.length == 0 || this.backlogs[this.backlogs.length - 1]['label'] != "")
            this.backlogs.push({'label': '', 'state': -1, 'value': undefined});
    },
    removeBacklog(index) {
        this.backlogs.splice(index, 1);
    },
    generateJSON() {
        return this.backlogs;
    },
    importJSON(fileContent) {
        if (fileContent['backlogs']) {
            this.backlogs = [];
            fileContent['backlogs'].forEach(backlog => {
                this.backlogs.push(backlog);
            });
        } else {
            alert('Ce fichier ne contient pas de backlogs.');
        }
    },
    backlogsOk() {
        return this.backlogs.some(backlog => backlog['label'].trim() !== '');
    },
}

};
</script>

<style scoped>

#backlogs-list {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.backlog-elt {
    position: relative;
    width: 90%;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    font-family:  ObjectSans-Slanted;
    color: rgba(51, 48, 48, .75);
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 3% 5%;
    font-size: 1rem;
}

input.processed {
    border: 3px #88EB65 solid;
}

input.loop {
    border: 3px #F88DF0 solid;
}

img {
    position: absolute;
    right: 0;
    top: 33%;
    height: 33%;
    opacity: .5;
    transition: all .2s ease;
}

img:hover {
    opacity: .8;
}

button {
    font-family: ObjectSans-HeavySlanted;
    font-size: 1rem;
    border: none;
    background: none;
    color: white;
    text-align: left;
    padding: 3% 5%;
    opacity: .5;
    transition: all .2s ease;
    width: 100%;
}

button:hover {
    opacity: .8;
}

</style>