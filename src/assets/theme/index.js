const theme = {
    color: {
        primary: '#ff385c',
        secondary: '#00848A'
    },
    textColor: {
        primary: '#484848',
        secondary: '#222'
    },
    mixins: {
        boxShadow: `transition: box-shadow 200ms ease;
        &:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
        }`
    }
}

export default theme