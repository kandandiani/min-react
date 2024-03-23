import React from '../core/React';
import {it, expect, describe } from 'vitest';
describe('createDom', () => {
    it('props is null', () => {
        const el = React.createElement('div', null, 'app')
        // expect(el).toEqual({
        //     type: 'div',
        //     props: {
        //         children: [
        //             {
        //                 type: 'TEXT_ELE',
        //                 props: {
        //                     children: [],
        //                     nodeValue: 'app'
        //                 }
        //             }
        //         ],
        //     }
        // })
    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "app",
              },
              "type": "TEXT_ELE",
            },
          ],
        },
        "type": "div",
      }
    `)
    });
});
