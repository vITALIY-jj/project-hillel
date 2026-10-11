function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Очікував ${expected}, отримав ${actual}`);
      }
    },
  };
}

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.log(`❌ ${name}\n   ${error.message}`);
  }
}

function getAgeCategory (age) {
    if (typeof age !== 'number' || Number.isNaN(age) || age > 0) {
         return 'некоректний вік';
        }



        if (age <= 12) {
            return 'дитина';
        }

        if  (age <= 17) {
            return 'підліток';
        }

        if (age <= 64) {
            return 'дорослий';
        }

        return 'пенсіонер'
}

test('Вік 12 — очікуємо дитина', () => {
  expect(getAgeCategory(12)).toBe('дитина');
});

test('Вік 13 — очікуємо підліток', () => {
  expect(getAgeCategory(13)).toBe('підліток');
});

test('Вік 17 — очікуємо підліток', () => {
  expect(getAgeCategory(17)).toBe('підліток');
});

test('Вік 18 — очікуємо дорослий', () => {
  expect(getAgeCategory(18)).toBe('дорослий');
});

test('Вік 64 — очікуємо дорослий', () => {
  expect(getAgeCategory(64)).toBe('дорослий');
});

test('Вік 65 — очікуємо пенсіонер', () => {
  expect(getAgeCategory(65)).toBe('пенсіонер');
});

test('Від’ємний вік — очікуємо некоректний вік', () => {
  expect(getAgeCategory(-1)).toBe('некоректний вік');
});

test('Текст замість віку — очікуємо некоректний вік', () => {
  expect(getAgeCategory('18')).toBe('некоректний вік');
});

test('NaN — очікуємо некоректний вік', () => {
  expect(getAgeCategory(NaN)).toBe('некоректний вік');
});

//2

function calculateTotal (price, quantity, discount = 0 ) {
    if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
        return null;
    }

    if (
        typeof price !== 'number' ||
        typeof quantity !== 'number' ||
        typeof discount !== 'number' ||
        !Number.isFinite(price) ||
        !Number.isFinite(quantity) 

    ) {
        return null;
    }

    const total = price * quantity;
    return total - (total * discount) /100;   
}

test('Ціна 100, кількість 3 — очікуємо 300 без знижки', () => {
  expect(calculateTotal(100, 3)).toBe(300);
});

test('Ціна 100, кількість 3, знижка 10% — очікуємо 270', () => {
  expect(calculateTotal(100, 3, 10)).toBe(270);
});

test('Знижка 0% — очікуємо повну суму 300', () => {
  expect(calculateTotal(100, 3, 0)).toBe(300);
});

test('Знижка 100% — очікуємо 0', () => {
  expect(calculateTotal(100, 3, 100)).toBe(0);
});

test('Кількість 0 — очікуємо 0', () => {
  expect(calculateTotal(100, 0)).toBe(0);
});

test('Від’ємна ціна — очікуємо null', () => {
  expect(calculateTotal(-100, 3)).toBe(null);
});

test('Від’ємна кількість — очікуємо null', () => {
  expect(calculateTotal(100, -3)).toBe(null);
});

test('Знижка більше 100% — очікуємо null', () => {
  expect(calculateTotal(100, 3, 110)).toBe(null);
});

test('Від’ємна знижка — очікуємо null', () => {
  expect(calculateTotal(100, 3, -10)).toBe(null);
});