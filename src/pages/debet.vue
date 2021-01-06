<template>
    <div>
        <div class="header">
            <h1 class="mb-20">Доходы</h1>
            <button class="btn btn-secondary btn-add" @click="add">Добавить запись</button>
        </div>
        <DataTable
                :columns="columnsDebet"
                :data="debets"
                :on-delete="deleteDebet"
                :on-edit="edit"
        />
        <FormEditDebet
                v-if="showForm"
                :data="editLine"
                :show.sync="showForm"
                :reload="getData"
        />
    </div>
</template>

<script>
    import DataTable from "../components/DataTable";
    import FormEditDebet from "../components/forms/FormEditDebet";
    import moment from "moment";

    export default {
        name: "credit",
        data() {
            return {
                resource: null,
                showForm: false,
                debets: [],
                columnsDebet: [
                    {
                        name: "Дата",
                        value: "date"
                    },
                    {
                        name: "Категория",
                        value: "category"
                    },
                    {
                        name: "Сумма",
                        value: "value"
                    }
                ],
                editLine: null,
            }
        },
        components: {
            DataTable,
            FormEditDebet
        },
        methods: {
            getData() {
                this.resource.get()
                    .then(response => response.json())
                    .then(debets => {
                        this.debets = debets.map(debet => ({
                            ...debet,
                            date: moment(debet.date).format('DD.MM.yyyy'),
                            category: this.getCurrentCategory(debet.category).name
                        }));
                    })
            },
            getCurrentCategory(id, name) {
                return this.$store.getters.computedDebetCategory.find(item => (item.id === id || item.name === name)) || {};
            },
            add() {
                this.editLine = {
                    id: null,
                    category: '',
                    value: '',
                };
                this.showForm = true;
            },
            edit: function (row) {
                this.editLine = {
                    ...row,
                    category: this.getCurrentCategory('', row.category).id
                };
                this.showForm = true;
            },
            deleteDebet: function (row) {
                this.resource.remove({id: row.id}).then(this.getData)
            }
        },
        created() {
            this.resource = this.$resource('debets{/id}');
            this.getData();
        }
    }
</script>

<style scoped lang="less">
    .header {
        display: flex;
        justify-content: space-between;
    }

    .btn-add {
        margin: 10px 0 20px 0;
    }
</style>