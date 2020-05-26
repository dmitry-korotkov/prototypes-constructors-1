import Character from '../js/app';

test('Correct creats Bowman hero', () => {
  const result = new Character('killer228', 'Bowman');
  expect(result).toEqual({
    name: 'killer228',
    type: 'Bowman',
    health: 100,
    level: 1,
    'Атака/защита': '25/25',
  });
});

test('Correct creats Swordsman hero', () => {
  const result = new Character('killer228', 'Swordsman');
  expect(result).toEqual({
    name: 'killer228',
    type: 'Swordsman',
    health: 100,
    level: 1,
    'Атака/защита': '40/10',
  });
});

test('Correct creats Magician hero', () => {
  const result = new Character('killer228', 'Magician');
  expect(result).toEqual({
    name: 'killer228',
    type: 'Magician',
    health: 100,
    level: 1,
    'Атака/защита': '10/40',
  });
});

test('Correct creats Undead hero', () => {
  const result = new Character('killer228', 'Undead');
  expect(result).toEqual({
    name: 'killer228',
    type: 'Undead',
    health: 100,
    level: 1,
    'Атака/защита': '25/25',
  });
});

test('Correct creats Zombie hero', () => {
  const result = new Character('killer228', 'Zombie');
  expect(result).toEqual({
    name: 'killer228',
    type: 'Zombie',
    health: 100,
    level: 1,
    'Атака/защита': '40/10',
  });
});

test('Correct creats Daemon hero', () => {
  const result = new Character('killer228', 'Daemon');
  expect(result).toEqual({
    name: 'killer228',
    type: 'Daemon',
    health: 100,
    level: 1,
    'Атака/защита': '10/40',
  });
});

test('Uncorrect craets name hero', () => {
  expect(() => {
    Character();
  }).toThrow();
});

test('Uncorrect creats type hero', () => {
  expect(() => {
    const result = new Character('killer228', 'Killer');
    result();
  }).toThrow();
});
