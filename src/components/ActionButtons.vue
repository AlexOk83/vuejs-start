<template>
    <div class="btn-group" data-toggle="buttons">
        <button class="btn btn-sm btn-outline-info" v-if="onEdit" @click="onEdit(row)"><span class="icon icon-edit" /></button>
        <button class="btn btn-sm btn-outline-danger"  v-if="onDelete" @click="onDelete(row)"><span class="icon icon-delete"/></button>
        <button type="submit" class="btn btn-sm btn-outline-secondary" v-if="onSubmit"><span class="icon icon-save"/></button>
        <button class="btn btn-sm btn-outline-info" v-if="onClear" @click="onClear"><span class="icon icon-delete" /></button>
    </div>
</template>

<script>
    export default {
        name: "ActionButtons",
        props: ['onEdit', 'onDelete', 'onSubmit', 'onClear', 'row']
    }
</script>

<style scoped lang="less">
.icon {
    display: inline-block;
    width: 20px;
    &-edit {
        &:before {
            content: '\270E'
        }
    }
    &-delete {
        &:before {
            content: '\2718'
        }
    }
    &-save {
        &:before {
            content: '\2714'
        }
    }
}
</style>