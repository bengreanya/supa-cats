export function renderCard(cat) {
    const catEl = document.createElement('a');
    catEl.href = `./detail/?id=${cat.id}`;
    catEl.classList.add('cat-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = cat.name;
    nameEl.classList.add('cat-name');

    catEl.append(nameEl);

    return catEl;
}

export function renderCatDetail(catObject) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const hairEl = document.createElement('p');
    const moodEl = document.createElement('p');

    nameEl.textContent = catObject.name;
    ageEl.textContent = catObject.age;
    hairEl.textContent = catObject.hair;
    moodEl.textContent = catObject.mood;

    div.append(nameEl, ageEl, hairEl, moodEl);
    return div;
}
