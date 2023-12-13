<template>
    <div id="backlogs-list">
        <div v-for="(backlog, index) in backlogs"
            class="backlog-elt"
            :key="index"
        >
            <input 
                type="text"
                :id="index"
                :value="backlog"
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
        backlogs: [
            "page d'accueil statique",
            "barre de navigation",
            "formulaire de contact",
            "intégration de contenu",
            "footer",
            "adaptabilité mobile",
        ],
    };
},

methods: {
    onValueChange(event) {
        this.backlogs[event.target.id] = event.target.value;
    },
    addBacklog() {
        if (this.backlogs[this.backlogs.length - 1] != "")
            this.backlogs.push('');
    },
    removeBacklog(index) {
        this.backlogs.splice(index, 1);
    },
    generateJSON() {
        return this.backlogs;
    }
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