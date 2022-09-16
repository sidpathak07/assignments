class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    let volume = 3.14159 * (this.radius * this.radius) * this.height;
    console.log(`Volume of Cylinder is ${volume.toFixed(4)}`);
  }
}

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getVolume() {
    let volume = (4 / 3) * 3.14159 * (this.radius * this.radius * this.radius);
    console.log(`Volume of Sphere is ${volume.toFixed(4)}`);
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    let volume = (3.14159 * (this.radius * this.radius) * this.height) / 3;
    console.log(`Volume of Cone is ${volume.toFixed(4)}`);
  }
}

let cylinder = new Cylinder(10, 30);
cylinder.getVolume();

let sphere = new Sphere(5);
sphere.getVolume();

let cone = new Cone(5, 10);
cone.getVolume();
