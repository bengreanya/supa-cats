export function renderCard(cat) {
    const catEl = document.createElement('a');
    catEl.href = ``;
    catEl.classList.add('cat-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = cat.name;
    nameEl.classList.add('cat-name');

    catEl.append(nameEl);

    return catEl;
}
