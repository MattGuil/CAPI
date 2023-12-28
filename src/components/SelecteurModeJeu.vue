<template>
    <div id="container">
        <p id="mode-label">MODES DE JEU</p>
        <div
            v-for="(mode, index) in modes"
            :key="index"
            class="mode"
            :class="{ selected: selectedMode === index }"
            @click="selectModeOfIndex(index)"
        >
            {{ mode.toLocaleUpperCase() }}
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
        selectModeOfIndex(index) {
            this.selectedMode = index;
        },
        selectModeOfName(name) {
            switch(name) {
                case "strict":
                    this.selectModeOfIndex(0);
                    break;
                case "moyenne":
                    this.selectModeOfIndex(1);
                    break;
                case "médiane":
                    this.selectModeOfIndex(2);
                    break;
                case "majorité absolue":
                    this.selectModeOfIndex(3);
                    break;
                case "majorité relative":
                    this.selectModeOfIndex(4);
                    break;
                default:
                    this.selectModeOfIndex(0);
                    break;
            }
        },
        generateJSON() {
            return this.modes[this.selectedMode];
        },
        importJSON(fileContent) {
            if (fileContent['mode']) {
                this.selectModeOfName(fileContent['mode']);
            } else {
                this.selectModeOfIndex(0);
            }
                
        },
    }
}
</script>
  
<style scoped>

#container {
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