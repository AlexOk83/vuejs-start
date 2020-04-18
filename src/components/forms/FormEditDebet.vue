<template>
    <form autocomplete="off" @submit="onSubmit" novalidate>
        <table>
            <tr class="line">
                <td class=" edit-id" />
                <td class="edit-category">
                    <select class="form-control" v-if="category.length" v-model="formValues.category" v-for="option of category">
                        <option :value="option.id">{{option.name}}</option>
                    </select>
                </td>
                <td class="edit-value">
                    <input class="form-control" type="text" v-model="formValues.value">
                </td>
                <td class="edit-comment">
                    <input class="form-control " type="text" v-model="formValues.comment">
                </td>
                <td>
                    <ActionButtons
                        :on-submit="true"
                        :on-clear="onClear"
                    />
                </td>
            </tr>
        </table>

    </form>
</template>

<script>
    import ActionButtons from "../ActionButtons";

    export default {
        name: "FormEditCredit",
        props: ['data', 'show'],
        data(){
            return {
                category: [],
                formValues: {

                }
            }
        },
        components: {
            ActionButtons,
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                console.log(this.data);
            },
            initializeForm() {
                this.category = this.$store.getters.computedCreditCategory;
                this.formValues = {...this.data};
                console.log(this.formValues);
            },
            onClear(event) {
                event.preventDefault();
                this.initializeForm();
                this.$emit('update:show', false)
            }
        },
        created() {
            this.initializeForm();
        },
        updated() {
            console.log(this.formValues);
        }
    }
</script>

<style scoped lang="less">
    @media screen and (min-width: 1200px) {
        .edit-id {
            width: 70px;
            padding-right: 20px;
        }
        .edit-category {
            padding-right: 20px;
            min-width: 260px;
        }
        .edit-value {
            padding-right: 20px;
            max-width: 200px;
        }
        .edit-comment {
            padding-right: 20px;
            min-width: 345px;
        }
    }

</style>