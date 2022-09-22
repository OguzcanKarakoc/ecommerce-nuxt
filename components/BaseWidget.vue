<template>
  <BaseCollapsible>
    <div class="flex">Title</div>

    <template #content>
      <div>
        <div class="container mx-auto my-4 px-4">
          <div class="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseCollapsible>
</template>
