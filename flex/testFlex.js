module.exports = {
  type: 'bubble',
  styles: {
    footer: {
      separator: true
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'PROMOSI GAN',
        weight: 'bold',
        color: '#1DB446',
        size: 'sm'
      },
      {
        type: 'text',
        text: 'Mie Daffa',
        weight: 'bold',
        size: 'xxl',
        margin: 'md'
      },
      {
        type: 'text',
        text: 'Gedung 02 Kamar 419',
        size: 'xs',
        color: '#aaaaaa',
        wrap: true
      },
      {
        type: 'separator',
        margin: 'xxl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'xxl',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: 'Mie',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: 'Rp6.000',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: 'Mie + Telur',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: 'Rp8.000',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '2 Mie + 2 Telur',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: 'Rp15.000',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '4 Mie + 4 Telur + Gratis Nasi',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: 'Rp30.000',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          }
        ]
      },
      {
        type: 'separator',
        margin: 'xxl'
      },
      {
        type: 'box',
        layout: 'horizontal',
        margin: 'md',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: 'Pesan Sekarang',
              uri: 'http://line.me/ti/p/~mznsptr'
            },
            style: 'primary',
            color: '#0000ff'
          }
        ]
      }
    ]
  }
};
