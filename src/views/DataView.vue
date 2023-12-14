<template>
    <PageContainer>
        <div id="content">
            <div id="title">Data Visualization</div>
            <div id="options-container">
                <a href="/statewise-line" class="option border-shadow">
                    Statewise Line Graph
                </a>
                <a href="/statewise-map" class="option border-shadow">
                    Statewise Map
                </a>
                <a href="/categorywise-line" class="option border-shadow">
                    Property-wise Line Graph 
                </a>
        </div>
        </div>
    </PageContainer>
</template>

<script setup>
import PageContainer from '../components/PageContainer.vue';
</script>

<style scoped>
@import url('../assets/main.css');
#content {
    display: flex;
    flex-direction: column;
    margin: 1em;
}
#title {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 2em;
    padding: 2em;
}
#options-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
}
.option {
    color: inherit;
    text-decoration: none;
    width: 20vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em
}
.option:hover {
    background-color: var(--c-light2);
}
</style>