/* eslint-disable linebreak-style */
export default function Character(name, type) {
  if (typeof name === 'string' && typeof type === 'string' && name.length > 1 && name.length < 11) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    switch (type) {
      case 'Bowman':
        this['Атака/защита'] = `${25}/${25}`;
        break;
      case 'Swordsman':
        this['Атака/защита'] = `${40}/${10}`;
        break;
      case 'Magician':
        this['Атака/защита'] = `${10}/${40}`;
        break;
      case 'Undead':
        this['Атака/защита'] = `${25}/${25}`;
        break;
      case 'Zombie':
        this['Атака/защита'] = `${40}/${10}`;
        break;
      case 'Daemon':
        this['Атака/защита'] = `${10}/${40}`;
        break;
      default:
        throw new Error('Некорректно заданный параметр');
    }
  } else {
    throw new Error('Некорректно заданный параметр');
  }
}
