<template>
    <table class="table" v-if="data">
        <thead>
            <tr>
                <th  scope="col">#</th>
                <th scope="col" v-for="col of columns">{{col.name}}</th>
                <th scope="col" v-if="deleteButton || editButton">Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row of data">
                <th scope="row">{{row.id}}</th>
                <td  v-for="col of columns">{{row[col.value]}}</td>
                <td v-if="editButton || deleteButton">
                    <ActionButtons
                        :on-delete="onDelete"
                        :on-edit="onEdit"
                        :row="row"
                    />
                </td>
            </tr>

        </tbody>
    </table>
</template>

<script>
    import ActionButtons from "./ActionButtons";

    export default {
        data() {
            return {
                classTable: 'table',
                editButton: true,
                deleteButton: true,
            }
        },
        props: ['data', 'columns', 'onDelete', 'onEdit', 'onSubmit'],
        components: {
            ActionButtons,
        },
        created() {
            console.log(this.onEdit)
            if (typeof this.onEdit !== "function") this.editButton = false;
            if (typeof this.onDelete !== "function") this.deleteButton = false;
        }
    }
</script>

<style scoped>

</style>