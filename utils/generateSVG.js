class Shapes {
    constructor(color, text, textColor) {
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  }
  
class Circle extends Shapes {
    render () {
    return `
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>
    `;
    }
}

class Triangle extends Shapes {
  render () {
    return `
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>
    `;

  }
}

class Square extends Shapes {
  render () {
    return `
    <rect x="60" y="10" width="170" height="170" fill="${this.color}"/>
    <text x="150" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>
    `
  }
}


function generateSVG(data) {
    
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${data}

</svg>
    `;
  }
  
  module.exports = {
    generateSVG, Circle, Triangle, Square
  }