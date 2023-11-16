<template>
  <div >
    <div class="mini-spacer bottom-mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-16">
          <v-col cols="12" md="8">
            <div>
              <h4 class="font-weight-medium contact-title mt-0">
                تماس سریع
              </h4>
              <form>
                <v-row class="mt-7">
                  <v-col cols="12" md="4" class="py-0">
                    <v-text-field
                        label="نام و نام خانوادگی"
                        variant="outlined"
                        color="primary"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" class="py-0">
                    <v-text-field
                        label="شماره موبایل"
                        variant="outlined"
                        color="primary"
                        placeholder="*********۰۹"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" class="py-0">
                    <v-text-field
                        label="ایمیل"
                        type="email"
                        variant="outlined"
                        color="primary"
                        placeholder="example@gmail.com"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-textarea
                        name="message"
                        color="primary"
                        variant="outlined"
                        label="متن پیام"
                        rows="3"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-btn
                    to="/"
                    class="bg-success mt-7 px-8 py-2"
                    flat
                    text="ارسال"
                >
                </v-btn>
              </form>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="bg-primary contact-detail-card rounded">
              <h2 class="detail-title font-weight-medium text-white">
                انتقادات و پیشنهادات
              </h2>
              <p class="mt-7 op-8 mb-0 text-white text-justify">شما می‌توانید هر زمان که تمایل داشتید با ما تماس بگیرید یا
                ایمیل بفرستید. هدف ما این است که به شما بهترین تجربه ممکن را
                در مطب دندانپزشکی دکتر دندان پزشکیان ارائه دهیم و درخواست‌ها و نیازهای شما را برآورده کنیم.</p>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

<script setup>
</script>