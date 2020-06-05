/* eslint-disable no-template-curly-in-string */
import { setLocale } from 'yup'

setLocale({
    mixed: {
        default: 'Некорректное значение',
        required: 'Поле обязательно',
        oneOf: 'Значение должно быть одно из следующих: ${values}',
        notOneOf: 'Значение не может быть одним из следующих: ${values}',
    },
    string: {
        matches: 'Некорректное значение',
        email: 'Некорретный email',
        url: 'Некорретная ссылка',
        trim: 'Значение не должно содержать проблемы в конце',
    },
    number: {
        min: 'Не может быть меньше ${min}',
        max: 'Не может быть больше ${max}',
        lessThan: 'Должно быть менее чем ${less}',
        moreThan: 'Должно быть более чем ${more}',
        positive: 'Должно быть положительным числом',
        negative: 'Должно быть негативным числом',
        integer: 'Должно быть числом',
    },
})