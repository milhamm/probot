module.exports = {
  type: 'bubble',
  styles: {
    footer: {
      separator: true
    }
  },
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Mie Daffa',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Lokasi',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: 'Gedung 02 Kamar ???',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'separator'
          },
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
                text: 'Rp6000',
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
                text: 'Rp8000',
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
                text: 'Rp15.000 (Hemat 1k)',
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
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: 'Nasi Putih',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: 'Rp4000 & Rp 2000',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          }
        ]
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: {
      type: 'button',
      style: 'primary',
      height: 'sm',
      action: {
        type: 'uri',
        label: 'Pesan Sekarang',
        uri: 'http://line.me/ti/p/~mznsptr'
      }
    }
  }
};
