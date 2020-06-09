<template>
    <div>
        <div class="body">
            <div class="display">
                <div class="display__history">{{ getHistory }}</div>
                <div class="display__value">{{ getValue }}</div>
            </div>
            <div class="buttons">
                <div class="line">
                    <div class="button button__bsp" @click="handleDeleteLastNumber"/>
                    <div class="button" @click="clearLast">CE</div>
                    <div class="button" @click="clearAll">C</div>
                    <div class="button" @click="() => handleOperation('/')">/</div>
                </div>
                <div class="line">
                    <div class="button" @click="() => handleAddNumber('7')">7</div>
                    <div class="button" @click="() => handleAddNumber('8')">8</div>
                    <div class="button" @click="() => handleAddNumber('9')">9</div>
                    <div class="button" @click="() => handleOperation('*')">*</div>
                </div>
                <div class="line">
                    <div class="button" @click="() => handleAddNumber('4')">4</div>
                    <div class="button" @click="() => handleAddNumber('5')">5</div>
                    <div class="button" @click="() => handleAddNumber('6')">6</div>
                    <div class="button" @click="() => handleOperation('-')">-</div>
                </div>
                <div class="line">
                    <div class="button" @click="() => handleAddNumber('1')">1</div>
                    <div class="button" @click="() => handleAddNumber('2')">2</div>
                    <div class="button" @click="() => handleAddNumber('3')">3</div>
                    <div class="button" @click="() => handleOperation('+')">+</div>
                </div>
                <div class="line">
                    <div class="button button__double" @click="() => handleAddNumber(0)">0</div>
                    <div class="button" @click="handleAddZap">,</div>
                    <div class="button" @click="getResult">=</div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    const OPERATIONS = [
        '*', '/', '+', '-'
    ];

    const isValidOperation = (symbol) => OPERATIONS.includes(symbol);
    const lastHistoryNotOperation = (history = []) => !OPERATIONS.includes(history[history.length - 1]);
    const operation = (result, operation, nextNumber, value) => {
        let denominator = nextNumber || value;
        switch (operation) {
            case '/': {
                return parseFloat(result) / parseFloat(denominator);
            }
            case '*': {
                return parseFloat(result) * parseFloat(denominator);
            }
            case '+': {
                return parseFloat(result) + parseFloat(denominator);
            }
            case '-': {
                return parseFloat(result) - parseFloat(denominator);
            }
        }
    }

    export default {
        name: "calc",
        data() {
            return {
                value: '0',
                history: [],
            }
        },
        computed: {
            getHistory() {
                let a = '';
                this.history.forEach(val => {
                    a += val;
                });
                return a;
            },
            getValue() {
                return this.value;
            }
        },
        methods: {
            handleDeleteLastNumber() {
                if (this.value.length > 1) {
                    this.value = this.value.slice(0, -1);
                } else {
                    this.value = '0'
                }
            },
            handleAddZap() {
                if (!this.value.includes(',')) {
                    this.value = this.value + '.';
                }
            },
            getResult() {
                let result = this.history[0];
                this.history.forEach((i, key) => {
                    if (isValidOperation(i)) {
                        result = operation(result, i, this.history[key + 1], this.value);
                    }
                })
                this.history.push(this.value);
                this.history.push('=');
                this.value = result;

            },
            clearLast() {
                this.value = '0';
            },
            clearAll() {
                this.value = '0';
                this.history = [];
            },
            handleOperation(operation) {
                if (this.history.includes('=')) {
                    this.history = [];
                }
                if (this.value !== '0') {
                    this.history.push(this.value);
                    this.value = '0';
                    if (lastHistoryNotOperation(this.history)) {
                        this.history.push(operation);
                    }
                }
            },
            handleAddNumber(number) {
                if (this.value === '0') {
                    return this.value = number;
                }

                this.value = this.value + number;
            }
        }
    }
</script>

<style scoped lang="less">
    .body {
        background: #cccccc;
        width: 100%;
        max-width: 400px;
        border-radius: 10px;
        margin: 20px auto;
        padding: 20px 10px 10px;
        box-shadow: 3px 3px 5px rgba(black, 0.4);
    }
    .display {
        border: 1px solid #212121;
        padding: 5px 10px;
        background-color: white;
        text-align: right;
        margin-bottom: 10px;
        &__history {
            width: 100%;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
        }
        &__value {
            font-size: 24px;
            line-height: 40px;
            font-weight: bold;
            overflow: hidden;
            overflow-wrap: break-word;
        }
    }
    .line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
    }
    .button {
        width: 24%;
        border-radius: 4px;
        border-bottom: 4px solid #939393;
        line-height: 50px;
        height: 50px;
        background: #eeeeee;
        box-shadow: 1px 1px 3px rgba(black, 0.4);
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        user-select: none;
        position: relative;
        overflow: hidden;
        &:active {
            margin-top: 2px;
            border-bottom: 0px solid #939393;
            height: 47px;
        }
        &__double {
            width: 49%;
        }
        &__bsp {
            &:before {
                content: '\2190';
                font-size: 30px;
            }
        }
    }
</style>