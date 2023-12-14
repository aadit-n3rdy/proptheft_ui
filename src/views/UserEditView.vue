<template>
    <PageContainer>
        <form @submit="submit">
        <div id="container">
            <div id="title" class="border-shadow">
                Edit User Permissions
            </div>
            <div id="inp-container" class="border-shadow">
                <div class="inp">
                    <label for="email">User Email:</label>
                    <input type="email" id="email" required v-model="email"/>
                </div>
                <div class="inp">
                    <label for="apid">Access Policy ID:</label>
                    <input type="number" id="apid" required v-model="apid"/>
                </div>
                <div id="subm-container">
                    <input type="submit" value="Submit" id="submit" />
                </div>
            </div>
        </div>
        </form>
    </PageContainer>
</template>

<script setup>
import PageContainer from '../components/PageContainer.vue';
import axios from 'axios';
import { ref } from 'vue';

const email = ref('')
const apid = ref('')

async function submit(e) {
    console.log('email:'+ email.value)
    console.log('ap:' + apid.value)
    const body = {
        u_email: email.value,
        sp_id: apid.value
    }
    const res = await axios.post('http://localhost:3000/user/assignperms', body)
    console.log(res)
    return false
}
</script>

<style scoped>
@import url('../assets/main.css');

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
