import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enchant-next', 'Integration | Component | enchant next', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enchant-next}}`);

  assert.equal(this.$().text().trim(), 'Next');

  // Template block usage:
  this.render(hbs`
    {{#enchant-next}}
      template block text
    {{/enchant-next}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
