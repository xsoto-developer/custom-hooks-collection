import { useState } from "react";

export const UseForm = (initialForm = {}) => {

    const [formState, setFormState] = useState({ initialForm })

    const onInputchange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        }
        );
    };

    const onResetForm = () => {
        setFormState(initialForm)
    };

    return {
        ...formState,
        formState,
        onInputchange,
        onResetForm

    }
}
