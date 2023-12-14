<template>
    <PageContainer>
        <div id="content">
            <div id="title">User List</div>
            <div id="table-container">
                <table id="table">
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Account Type</th>
                        <th>Permissions</th>
                    </tr>
                    <tr v-for="row in data" :key="row.u_email">
                        <td>{{ row.u_email }}</td>
                        <td>{{ row.u_fname.trim() + ' ' + row.u_lname.trim() }}</td>
                        <td>{{ row.u_primary_phno }}</td>
                        <td>{{ row.u_acc_type.trim() }}</td>
                        <td>{{ row.sp_id + '-' + row.sp_name }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </PageContainer>
</template>

<script setup>
import PageContainer from '../components/PageContainer.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const data = ref([])

async function updateData() {
    const stuff = (await axios.get('http://localhost:3000/users/norm_users'))
    data.value = stuff.data.data
}

onMounted(
    () => {
        updateData()
    }
)

</script>

<style scoped>
@import url('../assets/base.css');
table {
    width: 100%;
}
table * {
    border: 1px solid var(--c-dark1);
    padding: 1em;
}
th {
    background-color: var(--c-dark1);
    color: var(--c-light2);
}
table:nth-child(even) {
    background-color: red;
}
#title {
    font-size: 2em;
    padding: 1em;
    display: flex;
    align-content: center;
    justify-content: center;
}
#table-container {
    padding: 2em;
}
#container {
    width: 100%;
    height: 100%;
    align-items: center;
}
</style>
