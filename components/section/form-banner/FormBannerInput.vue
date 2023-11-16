<template>
  <div>
    <div class="formbrand-banner-component mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Form brand-banner
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="7" lg="5" class="d-flex align-center">
            <div class="text-center text-sm-left">
              <h2 class="formbrand-banner-title font-weight-bold">
                Give your Business Real boost Now!
              </h2>
              <p class="mt-6 pt-4 text-muted">
                To accomplish great things, we must not only act, but also
                dream; not only plan, but also believe.
              </p>
              <div class="mt-6 pt-2">
                <form>
                  <div class="stylish-input-group">
                    <v-text-field
                      placeholder="Enter Email Address"
                      variant="solo"
                      hide-details
                    ></v-text-field>
                    <v-btn
                      rounded
                      color="primary"
                      elevation="0"
                      class="text-uppercase font-weight-medium"
                      dark
                    >
                      Get Started
                    </v-btn>
                  </div>
                </form>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="5" lg="6" class="ml-auto">
            <img src="/images/form-banner/form-brand-banner.png" alt="banner" class="img-fluid"/>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Form brand-banner
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>


