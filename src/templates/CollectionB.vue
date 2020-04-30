<template>
  <Layout>
    <div>
      <h1>Template Collection B</h1>
      <div>Product: {{$page.collectionB ? $page.collectionB.title : 'null'}}</div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  collectionB(id: $id) {
    title
  }
}
</page-query>