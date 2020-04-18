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
        />
    </div>
</template>

<script>
    import DataTable from "../components/DataTable";
    import FormEditDebet from "../components/forms/FormEditDebet";

    export default {
        name: "credit",
        data() {
            return {
                resource: null,
                showForm: false,
                debets: [],
                columnsDebet: [
                    {
                        name: "Категория",
                        value: "category"
                    },
                    {
                        name: "Сумма",
                        value: "value"
                    }
                ],
                editLine: {
                    id: '',
                    category: '',
                    value: '',
                }
            }
        },
        components: {
            DataTable,
            FormEditDebet
        },
        methods: {
            getData() {
                this.resource = this.$resource('debets');
                this.resource.get()
                    .then(response => response.json())
                    .then(debets => {
                        this.debets = debets.map(debet => ({
                            ...debet,
                            category: this.getCurrentCategory(debet.id).name
                        }));
                    })
            },
            getCurrentCategory(id, name) {
                return this.$store.getters.computedDebetCategory().find(item => (item.id === id || item.name === name)) || {};
            },
            add() {
                this.editLine = {
                    id: '',
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
                console.log('Удаление - ', row);
            }
        },
        created() {
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