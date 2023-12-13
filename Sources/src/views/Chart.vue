<template>
    <div>
        <div>
            <div>
                <h2>BACKLOG #3</h2>
                <h1>formulaire de contact</h1>
                <h3><strong>RÉPARTITION</strong> DES VOTES</h3>
            </div>
            <button @click="this.$router.push('/dashboard');">CONTINUER</button>
        </div>
        <canvas ref="myChart" style="max-width: 60%; max-height: 60%;"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    name: 'ChartVue',
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = this.$refs.myChart;

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['0', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', 'CAFÉ!'],
                    datasets: [{
                        label: 'Nombre de votes',
                        data: [0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        backgroundColor: '#518CE5',
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                    y: {
                        type: 'linear',
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            precision: 0
                        },
                    }
                    }
                }
            });
        }
    }
};
</script>

<style scoped>

#content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#content > div:first-child {
    height: 25%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-family: ObjectSans-Heavy;
}

h2 {
    font-family: ObjectSans-Slanted;
    font-size: 1rem;
}

h3 {
    font-family: ObjectSans-Slanted;
    opacity: .8;
}

h3 strong {
    font-family: ObjectSans-HeavySlanted;
}

</style>
  