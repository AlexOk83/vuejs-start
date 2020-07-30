<template>
    <div>
        <h2>Пятнашки</h2>
        <div class="body-game">
            <div class="fishka" :class="{zero: !f}" v-for="(f, index) of getMatrix" @click="() => move(index)">{{f}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pjatnashki",
        data() {
            return {
                matrix: [
                     1, '', 3, 4,
                     5, 6, 7, 8,
                     9,10, 2,12,
                    13,14,15,11,
                ],
            }
        },
        computed: {
            getMatrix() {
               return this.matrix;
            }
        },
        methods: {
            findZero(indexZero, index) {
                if (this.matrix[indexZero] === '') {
                    this.matrix[indexZero] = this.matrix[index];
                    this.matrix[index] = '';
                    console.log(this.matrix);
                }
            },
            move(index) {
                switch (index) {
                    case 0: {
                       console.log(0);
                       this.findZero(1, index);
                       this.findZero(4, index);
                       break;
                    }
                    case 1: {
                        this.findZero(0, index);
                        this.findZero(2, index);
                        this.findZero(5, index);
                       break;
                    }
                    case 2: {
                        this.findZero(1, index);
                        this.findZero(3, index);
                        this.findZero(6, index);
                       break;
                    }
                    case 3: {
                        this.findZero(2, index);
                        this.findZero(7, index);
                       break;
                    }

                    case 4: {
                        this.findZero(0, index);
                        this.findZero(5, index);
                        this.findZero(8, index);
                       break;
                    }
                    case 5: {
                        this.findZero(1, index);
                        this.findZero(4, index);
                        this.findZero(6, index);
                        this.findZero(9, index);
                       break;
                    }
                    case 6: {
                        this.findZero(2, index);
                        this.findZero(5, index);
                        this.findZero(7, index);
                        this.findZero(10, index);
                       break;
                    }
                    case 7: {
                        this.findZero(3, index);
                        this.findZero(6, index);
                        this.findZero(11, index);
                       break;
                    }

                    case 8: {
                        this.findZero(4, index);
                        this.findZero(9, index);
                        this.findZero(12, index);
                       break;
                    }
                    case 9: {
                        this.findZero(5, index);
                        this.findZero(8, index);
                        this.findZero(10, index);
                        this.findZero(13, index);
                       break;
                    }
                    case 10: {
                        this.findZero(6, index);
                        this.findZero(9, index);
                        this.findZero(11, index);
                        this.findZero(14, index);
                       break;
                    }
                    case 11: {
                        this.findZero(7, index);
                        this.findZero(10, index);
                        this.findZero(15, index);
                       break;
                    }
                    case 12: {
                        this.findZero(8, index);
                        this.findZero(13, index);
                       break;
                    }
                    case 13: {
                        this.findZero(9, index);
                        this.findZero(12, index);
                        this.findZero(14, index);
                       break;
                    }
                    case 14: {
                        this.findZero(10, index);
                        this.findZero(13, index);
                        this.findZero(15, index);
                       break;
                    }
                    case 15: {
                        this.findZero(11, index);
                        this.findZero(14, index);
                       break;
                    }
                }
                this.$forceUpdate();
            }
        },
    }
</script>

<style scoped lang="less">
    .body-game {
        padding: 5px;
        width: 600px;
        height: 600px;
        background-color: #caa365;
        margin: 50px auto;
        border: 30px solid darken(#caa365, 10);
        box-shadow: inset 0 0 50px rgba(white, 0.3);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .fishka {
        width: (600px - 80px) / 4;
        height: (600px - 80px) / 4;
        text-align: center;
        border: 4px solid darken(#caa365, 10);
        line-height: 500px / 4;
        font-size: 40px;
        font-weight: 500;
        cursor: pointer;
        &.zero {
            border: none;
            cursor: default;
        }
    }
</style>