Vue.createApp({})
    .component('my-hello', {
        template: `<div>こんにちは、コンポーネント！</div>
        <div>こんにちは、コンポーネント2！</div>`
    })
    .mount('#app')