<template>
  <Layout>
    <div>
      <h1>Template Collection A</h1>
      <div>Product: {{$page.collectionA ? $page.collectionA.title : 'null'}}</div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  collectionA(id: $id) {
  }
}
</page-query>