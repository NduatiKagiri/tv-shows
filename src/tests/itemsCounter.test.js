import ShowsCounter from '../modules/itemsCounter.js';

describe('Homepage Items Counter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="count" ></div>
    `;
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  test('Test With No Objects', () => {
    const shows = [];
    localStorage.setItem('shows', JSON.stringify(shows));
    ShowsCounter.itemsCounter();
    let myHtml = document.getElementById('totalCounts').innerHTML;
    myHtml = myHtml.slice(27, -2);
    expect(Number(myHtml)).toBe(0);
  });

  test('Test With 2 Objects', () => {
    const shows = [
      { id: 1, name: 'First Object' }, { id: 2, name: 'Second Object' },
    ];
    localStorage.setItem('shows', JSON.stringify(shows));
    ShowsCounter.itemsCounter();
    let myHtml = document.getElementById('totalCounts').innerHTML;
    myHtml = myHtml.slice(27, -2);
    expect(Number(myHtml)).toBe(2);
  });

  test('Test With 10 Objects', () => {
    const shows = [
      { id: 1, name: 'First Object' }, { id: 2, name: 'Second Object' },
      { id: 3, name: 'Third Object' }, { id: 4, name: 'Fourth Object' },
      { id: 5, name: 'Fifth Object' }, { id: 6, name: 'Sixth Object' },
      { id: 7, name: 'Seventh Object' }, { id: 8, name: 'Eighth Object' },
      { id: 9, name: 'Nineth Object' }, { id: 10, name: 'Tenth Object' },
    ];
    localStorage.setItem('shows', JSON.stringify(shows));
    ShowsCounter.itemsCounter();
    let myHtml = document.getElementById('totalCounts').innerHTML;
    myHtml = myHtml.slice(27, -2);
    expect(Number(myHtml)).toBe(10);
  });
});
