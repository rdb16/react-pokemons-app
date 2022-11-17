const formatType = (type: string): string => {
    let color: string =""; 

    switch (type) {        
    case 'Feu':
        color = 'red lighten-1';
        break;
    case 'Eau':
        color = 'blue lighten-1';
        break;
    case 'Plante':
        color = 'green lighten-1';
        break;
    case 'Insecte':
        color = 'brown lighten-1';
        break;
    case 'Normal':
        color = 'grey lighten-1';
        break;
    case 'Vol':
        color = 'blue lighten-1';
        break;
    case 'Fée':
        color = 'pink lighten-4';
        break;
    case 'Poisson':
        color = 'deep-purple accent-1';
        break;
    case 'Psv':
        color = 'deep-purple darken-2';
        break;
    case 'Electrik':
        color = 'lime accent-1';
        break;
    case 'Combat':
        color = 'deep-orange';
        break;
    case 'default':
        color = 'grey';
        break;
    }

    return `chip ${color}`;
}

export default formatType;