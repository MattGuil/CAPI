<template>
    <div id="container">
        <div>
            <div id="nbJoueurs-values">
                <p>{{ nbSelectedRect }}</p>
                <p v-if="nbHoveredRect !== 0">{{ nbHoveredRect }}</p>
            </div>
            <p id="nbJoueurs-label">JOUEURS</p>
            <div class="jauge">
                <div
                    class="rectangle-container"
                    v-for="(index, rectIndex) in 10"
                    :key="index"
                    @mouseover="handleMouseOver(rectIndex)"
                    @mouseleave="handleMouseLeave"
                >
                    <div
                        :class="[
                            'rectangle', 
                            { 'blue': isSelected(rectIndex) },
                            { 'hover-blue': isHovered(rectIndex) },
                        ]"
                        @click="toggleColor(rectIndex)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SelecteurNbJoueursVue',
    data() {
        return {
            hoveredRectIndex: 10,
            selectedRectIndex: 10,
            nbHoveredRect: 0,
            nbSelectedRect: 0,
        };
    },
    methods: {
        handleMouseOver(rectIndex) {
            this.hoveredRectIndex = rectIndex;
        },
        handleMouseLeave() {
            this.hoveredRectIndex = 10;
        },
        toggleColor(rectIndex) {
            this.selectedRectIndex = rectIndex;
        },
        isHovered(rectIndex) {
            return this.hoveredRectIndex !== null && rectIndex >= this.hoveredRectIndex;
        },
        isSelected(rectIndex) {
            return this.selectedRectIndex !== null && rectIndex >= this.selectedRectIndex;
        }
    },
    updated() {
        this.nbSelectedRect = document.querySelectorAll('.blue').length;
        this.nbHoveredRect = document.querySelectorAll('.hover-blue').length;
    }
}
</script>
  
<style scoped>

#container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

#container > div {
    position: relative;
}

#nbJoueurs-label, nbJoueurs-values {
    position: absolute;
    top: 0;
    left: 0;
}

#nbJoueurs-label {
    font-family: ObjectSans-Regular;
    width: fit-content;
    transform-origin: 100% 100%;
    transform: translate(-100%, -100%) rotate(-90deg);
}

#nbJoueurs-values {
    font-family: ObjectSans-Heavy;
    transform: translate(-150%, 0);
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}

#nbJoueurs-values p:nth-child(1), #nbJoueurs-values p:nth-child(2) {
    position: absolute;
}

#nbJoueurs-values p:nth-child(1) {
    font-size: 1.5rem;
    transform: translate(0, -18%);
}

#nbJoueurs-values p:nth-child(2) {
    z-index: -5;
    font-size: 3rem;
    color: #518CE5;
    opacity: 34%;
}

.jauge {
    width: 50px;
}

.rectangle-container {
    padding-bottom: 3px;
}

.rectangle {
    height: 20px;
    background-color: #333030;
    opacity: 34%;
    border-radius: 5%;
}

.hover-blue {
    background-color: #518CE5;
}

.blue {
    background-color: #518CE5;
    opacity: 1;
}
  
</style>