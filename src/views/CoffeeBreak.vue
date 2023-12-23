<template>
    <div>
        <div>
            <img src="../assets/icons/coffee.png" alt="">
            <h1>PAUSE CAFÉ !</h1>
            <h2>LA PARTIE EST EN PAUSE</h2>
        </div>
        <div>
            <button @click="this.$router.push('/dashboard');">REPRENDRE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoffeeBreak',
    mounted() {
        const backlogs = localStorage.getItem('partie') ? JSON.parse(localStorage.getItem('partie'))['backlogs'] : null;

        if (backlogs) {
            const data = { backlogs };
            const jsonData = JSON.stringify(data);

            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'backlogs.json';
            link.click();
            URL.revokeObjectURL(url);
        }
    }
}
</script>

<style scoped>

#content {
    height: 100vh;
}

#content > div
{
    display: flex;
}

#content > div:first-child {
    height: 60%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

#content > div:last-child {
    height: 40%;
    justify-content: center;
    align-items: center;
}

img {
    width: 150px;
    opacity: .25;
}

h1 {
    font-family: ObjectSans-Heavy;
    font-size: 2rem;
    margin-top: 20px;
}

h2 {
    font-family: ObjectSans-Slanted;
    opacity: .8;
    font-size: .75rem;
}

</style>