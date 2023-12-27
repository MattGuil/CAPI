<template>
    <div>
        <div>
            <div>
                <h2>BACKLOG #{{ currentBacklogDisplay }}</h2>
                <h1>{{ currentBacklogLabel }}</h1>
                <h3><strong>RÉPARTITION</strong> DES VOTES</h3>
            </div>
            <button @click="this.$router.push('/dashboard');">CONTINUER</button>
        </div>
        <canvas ref="myChart" style="max-width: 60%; max-height: 60%;"></canvas>
    </div>
</template>

<script>
import { Chart, LinearScale, CategoryScale, BarElement, BarController, Tooltip } from 'chart.js';
Chart.register(LinearScale, CategoryScale, BarElement, BarController, Tooltip);

export default {
    name: 'ChartVue',
    data() {
        return {
            partie: undefined,
            currentBacklogDisplay: undefined,
            currentBacklogLabel: undefined,
            players: []
        };
    },
    mounted() {
        this.partie = this.$store.getters.getPartieInstance;
        this.currentBacklogDisplay = this.partie.infosForChart.currentBacklogDisplay;
        this.currentBacklogLabel = this.partie.infosForChart.currentBacklogLabel;
        this.currentBacklogState = this.partie.infosForChart.currentBacklogState;
        this.votes = this.partie.infosForChart.votes;
        this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = this.$refs.myChart;

            const votesCount = {
                '0': 0,
                '1': 0,
                '2': 0,
                '3': 0,
                '5': 0,
                '8': 0,
                '13': 0,
                '20': 0,
                '40': 0,
                '100': 0,
                '?': 0,
                'coffee': 0
            };

            this.votes.forEach(vote => {
                votesCount[vote]++;
            });

            const labels = Object.keys(votesCount);
            const data = Object.values(votesCount);
            const backgroundColor = this.currentBacklogState == '1' ? '#88EB65' : '#F88DF0';

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Nombre de votes',
                        data: data,
                        backgroundColor: backgroundColor,
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
  