<template>
  <div class="createCard">

    <div class="uk-card-default">
      <div class="uk-card-header">
        <h3 class="uk-card-title">{{content.title}}</h3>
      </div>

      <div class="uk-card-body uk-text-break">{{content.body}}</div>
      <!-- <div class="uk-card-body" v-if="content.body.length >= 180">{{content.body.substring(0,180) + " ..."}}</div> -->
      <div class="uk-card-footer">
        <div class="uk-button-group">
          <button class="uk-button uk-button-primary optionsButton"><span uk-icon="cog"></span> Manage</button>
          <button class="uk-button uk-button-primary optionsButton"><span uk-icon="database"></span> Analytics</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['content']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .uk-card-body {
    padding: 0;
    margin: 5%;
    height: 15vh;
    line-height: 140%;

    /* white-space: nowrap; */
    /* overflow: hidden;
    text-overflow: ellipsis; */
  }
</style>
