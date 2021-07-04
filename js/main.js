class SmartDevices {
  constructor(name, state) {
    this._name = name;
    this._state = state;
    this._backlightColor = "#e66465";
  }

  get name() {
    return this._name;
  }

  checkOnState() {
    let kettleChbox = document.querySelector("#chekTeapot");
    let lightChbox = document.querySelector("#chekLight");

    if (kettleChbox.checked || lightChbox.checked) {
      this._state = true;
      alert(` ${this._name} is on`);
    } else {
      this._state = false;
      alert(`${this._name} is off`);
    }
  }

  seeInfo() {
    alert(
      `name: ${this._name}, state: ${this._state}, backlightColor: ${this._backlightColor}`
    );
  }
}

class Kettle extends SmartDevices {
  constructor(name, state) {
    super(name, state);
    this._temperature = 0;
    this._backlightColor = "#e66465";
  }

  changeTemperature() {
    let select = document.getElementById("selectTemperature");
    let selectValue = Number(select.value);
    switch (selectValue) {
      case 10:
        this._temperature = 10;
        break;
      case 20:
        this._temperature = 20;
        break;
      case 30:
        this._temperature = 30;
        break;
      case 40:
        this._temperature = 40;
        break;
      case 50:
        this._temperature = 50;
        break;
      case 60:
        this._temperature = 60;
        break;
      case 70:
        this._temperature = 70;
        break;
      case 80:
        this._temperature = 80;
        break;
      case 90:
        this._temperature = 90;
        break;
      case 100:
        this._temperature = 100;
        break;
      default:
        this._temperature = 100;
        break;
    }

    alert(`${this._temperature} degrees set`);
  }

  changeBacklightColor() {
    const inputColor = document.getElementById("kettleColor");
    this._backlightColor = inputColor.value;
    alert("Color set");
  }

  seeInfo() {
    alert(
      `name: ${this._name}, state: ${this._state}, backlightColor: ${this._backlightColor}, temperature: ${this._temperature}`
    );
  }
}

class Light extends SmartDevices {
  constructor(name, state) {
    super(name, state);
    this._brightness = 50;
    this._backlightColor = "#e66465";
  }

  changeBrightness() {
    const inputBrightness = document.getElementById("brightness");
    this._brightness = inputBrightness.value;
    alert(`Brightness: ${this._brightness}`);
  }

  changeBacklightColor() {
    const inputColor = document.getElementById("lightColor");
    this._backlightColor = inputColor.value;
    alert("Color set");
  }

  seeInfo() {
    alert(
      `name: ${this._name}, state: ${this._state}, backlightColor: ${this._backlightColor}, brightness: ${this._brightness}`
    );
  }
}
class Garage extends SmartDevices {
  constructor(name, state) {
    super(name, state);
    this._backlightColor = "#e66465";
    this._brightness = 50;
  }

  changeBrightness() {
    const inputBrightness = document.getElementById("brightnessGarage");
    this._brightness = inputBrightness.value;
    alert(`Brightness: ${this._brightness}`);
  }

  changeBacklightColor() {
    const inputColor = document.getElementById("garageColor");
    this._backlightColor = inputColor.value;
    alert("Color set");
  }

  checkOnState() {
    let garageChbox = document.querySelector("#chekGarage");

    if (garageChbox.checked) {
      this._state = true;
      alert(` ${this._name} is opened`);
    } else {
      this._state = false;
      alert(` ${this._name}  is closed`);
    }
  }

  seeInfo() {
    alert(
      `name: ${this._name}, state: ${this._state}, backlightColor: ${this._backlightColor}, brightness: ${this._brightness}`
    );
  }
}

class SmartHouse {
  constructor(name) {
    this._name = name;
    this._devices = [];
  }

  get name() {
    return this._name;
  }

  get devices() {
    return this._devices;
  }

  addDevice(device) {
    this._devices.push(device);
    alert("Device is added");
  }

  getDeviceByName() {
    let temp;
    const device = prompt();
    this._devices.forEach((e) => {
      if (device === e.name) {
        temp = e;
      }
    });

    return temp;
  }

  deleteDeviceByName() {
    const device = prompt();
    this._devices.forEach((e, i) => {
      if (device === e.name) {
        this._devices.splice(i, 1);
      }
    });
    alert("Device is removed");
  }
}

const smartHouse = new SmartHouse("home");
