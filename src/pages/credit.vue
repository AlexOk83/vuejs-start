<template>
    <div>
        <div class="header">
            <h1 class="mb-20">Расходы</h1>
            <button class="btn btn-secondary btn-add" @click="addCredit">Добавить запись</button>
        </div>
        <DataTable
                :columns="columnsCredit"
                :data="credits"
                :on-delete="deleteCredit"
                :on-edit="editCredit"
        />
        <FormEditCredit v-if="showForm"
                        :data="editLine"
                        :show.sync="showForm"
                        :reload="getData"
        />
    </div>
</template>

<script>
    import DataTable from "../components/DataTable";
    import FormEditCredit from "../components/forms/FormEditCredit";

    export default {
        name: "credit",
        data() {
            return {
                resource: null,
                showForm: false,
                credits: [],
                columnsCredit: [
                    {
                        name: "Категория",
                        value: "category"
                    },
                    {
                        name: "Сумма",
                        value: "value"
                    },
                    {
                        name: "Комментарий",
                        value: "comment",
                    },
                ],
                editLine: null,
            }
        },
        components: {
            DataTable,
            FormEditCredit
        },
        methods: {
            getData() {
                this.resource.get()
                    .then(response => response.json())
                    .then(credits => {
                        this.credits = credits.map(credit => ({
                            ...credit,
                            category: this.getCurrentCategory(credit.category).name
                        }));
                    })
            },
            getCurrentCategory(id, name) {
                return this.$store.getters.computedCreditCategory.find(item => (item.id === id || item.name === name)) || {};
            },
            addCredit() {
                this.editLine = {
                    id: null,
                    category: '',
                    value: '',
                    comment: '',
                };
                this.showForm = true;
            },
            editCredit: function (row) {
                this.editLine = {
                    ...row,
                    category: this.getCurrentCategory('', row.category).id
                };
                this.showForm = true;
            },
            deleteCredit: function (row) {
                this.resource.remove({id: row.id}).then(this.getData)
            }
        },
        created() {
            this.resource = this.$resource('credits{/id}');
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