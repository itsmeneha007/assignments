function useForm(initialState) {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        callback(formState);
    };

    return {
        formState,
        handleChange,
        handleSubmit,
    };
}

export default useForm;
