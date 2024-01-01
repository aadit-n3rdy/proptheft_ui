<template>
    <PageContainer>
        <div id="container">
            <div id="title" class="border-shadow">
                Upload Data
            </div>
            <div id="inp-container" class="border-shadow">
                <div class="inp">
                    <label for="email">File Upload:</label>
                    <input type="file" @change="upload" id="email" required />
                </div>
            </div>
        </div>
    </PageContainer>
</template>

<script setup>
import PageContainer from '../components/PageContainer.vue';
import axios from 'axios';

function upload(e) {
    console.log(e)
    axios.get('http://localhost:3000/data/upload')
    console.log("UPLOEDD")
}
</script>

<style scoped>
@import url('../assets/base.css');
#container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    max-width: 100%;
    margin: 1em;
    gap: 1em;
}

#title {
    display: flex;
    font-size: 2em;
    justify-content: center;
    padding: 0.5em;
}
#inp-container {
    padding: 1em;
    align-content: center;
    justify-content: center;
}
.inp {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
    gap: 1em;
}

.inp input {
    border: 1px solid var(--c-dark1);
    border-radius: 0.2em;
    padding: 0.5em;
}

.inp label {
}

#subm-container {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
}

#submit {
    background-color: var(--c-dark2);
    color: var(--c-light1);
    border-radius: 0.25em;
    font-size: 1em;
	padding: 0.5em 2em;
    transition-duration: 0.5s;
}

#submit:hover {
	background-color: var(--c-dark1);
}
</style>