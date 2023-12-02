<template>
    <div id="container">
        <div>
            <p id="nbJoueurs-label">MODES DE JEU</p>
            <div
                v-for="(mode, index) in modes"
                :key="index"
                class="mode"
                :class="{ selected: selectedMode === index }"
                @click="selectMode(index)"
            >
                {{ mode.toLocaleUpperCase() }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SelecteurModeJeuVue',
    data() {
        return {
            modes : [
                "strict",
                "moyenne",
                "médiane",
                "majorité absolue",
                "majorité relative",
            ],
            selectedMode: 0,
        };
    },
    methods: {
        selectMode(index) {
            this.selectedMode = index;
        },
        generateJSON() {
            const jsonData = {
                modeJeu: this.modes[this.selectedMode],
            };
            return JSON.stringify(jsonData);
        }
    },
}
</script>
  
<style scoped>

#container {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
}

#container > div {
    width: 300px;
    position: relative;
}

p {
    position: absolute;
    font-family: ObjectSans-Regular;
    width: fit-content;
    transform-origin: 100% 100%;
    transform: translate(-105%, -100%) rotate(-90deg);
}

.mode {
    cursor: pointer;
    background-color: #333030;
    opacity: .34;
    color: white;
    text-align: left;
    font-family: ObjectSans-HeavySlanted;
    margin-bottom: 1.5%;
    padding: 2% 5%;
    border-radius: 5px;
}

.mode:hover {
    opacity: .5;
}

.mode.selected:hover {
    opacity: 1;
}

.selected {
    background-color: #518CE5;
    opacity: 1;
}
  
</style>