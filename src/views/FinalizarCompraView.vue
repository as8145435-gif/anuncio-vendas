<template>
  <v-app>
    <!-- Header com logo e botões -->
    <v-app-bar elevation="0" color="purple">
      <v-app-bar-title>
        <v-btn variant="icon" icon="mdi-arrow-left"></v-btn>
        Compra Segura
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn @click="$router.push({name:'home'})" icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            Compre com segurança e tenha a garantia do dinheiro de volta com a <span class="font-weight-bold text-purple">Compra Segura</span>
          </v-col>
          <v-col cols="12 pb-0 text-subtitle-1 font-weight-bold">
            Entrega <v-icon class="ml-3" color="purple">mdi-help-circle-outline</v-icon>
          </v-col>
          <v-col cols="12 pt-1">
            <v-radio-group color="purple">
              <v-radio label="Quero entrega pela OLX" value="entrega1"></v-radio>
              <v-radio label="Quero combinar a entrega com o vendedor" value="entrega2"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12 pb-0 text-subtitle-1 font-weight-bold">
            Endereço de Entrega
          </v-col>
          <v-col cols="12 px-0 pt-1">
            <v-row>
              <v-col cols="3 px-0 d-flex justify-center align-center">
                <v-icon color="red-lighten-1">mdi-alert-outline</v-icon>
              </v-col>
              <v-col cols="9 px-0">
                <v-row>
                  <v-col cols="7 px-0">
                    <span>
                      Cadastre seu endereço
                    </span>
                    <br>
                    <span class="text-caption">
                      você não possui endereços
                    </span>
                  </v-col>
                  <v-col cols="4 px-0 d-flex align-center">
                    <v-btn density="compact" variant="text" color="purple">Cadastrar</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12 pb-0 text-subtitle-1 font-weight-bold">
            Opção de Entrega
          </v-col>
          <v-col cols="12 px-0 pt-1">
            <v-row>
              <v-col cols="3 px-0 d-flex justify-center align-center">
                <v-icon color="primary">mdi-truck-delivery</v-icon>
              </v-col>
              <v-col cols="9 px-0">
                <v-row>
                  <v-col cols="7 px-0">
                    <span>
                      Expressa
                    </span>
                    <br>
                    <span class="text-caption">
                      Em até 3 dias úteis
                    </span>
                  </v-col>
                  <v-col cols="4 px-0 d-flex align-center font-weight-bold">
                    Grátis
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12 pb-0 text-subtitle-1 font-weight-bold">
            Forma de pagamento
          </v-col>
          <v-col cols="12 px-0 pt-1">
            <v-row>
              <v-col cols="3 px-0 d-flex justify-center align-center">
                <v-img :src="imgs.pix" height="30"></v-img>
              </v-col>
              <v-col cols="9 d-flex align-center px-0">
                Pix
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12 pb-0 text-subtitle-1 font-weight-bold">
            Resumo
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="3">
                <v-img height="80" :src="imgs.carrossel[0]"></v-img>
              </v-col>
              <v-col cols="9 d-flex align-center font-weight-bold">
                {{ anuncio.titulo }}
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12 pb-0 text-caption text-grey">
            Vendido por: {{ anuncio.anunciante.nome }}
          </v-col>
          <v-col cols="12 py-0 text-caption text-grey">
            Cpf: {{ anuncio.anunciante.cpf }}
          </v-col>
          <v-col cols="4 pb-0 text-grey">
            Produto:
          </v-col>
          <v-col cols="8 pb-0 d-flex justify-end text-grey">
            {{anuncio.precoAtual}}
          </v-col>
          <v-col cols="6 pb-0 text-grey">
            Entrega expressa:
          </v-col>
          <v-col cols="6 pb-0 d-flex justify-end text-grey">
            R$ 0,00
          </v-col>
          <v-col cols="4 pb-0 font-weight-bold">
            Total a pagar:
          </v-col>
          <v-col cols="8 pb-0 d-flex justify-end text-grey">
            {{anuncio.precoAtual}}
          </v-col>
          <v-col cols="12 pb-0 d-flex justify-end text-grey">
            <v-btn @click="irParaPagamento"
            :loading="loadings.loadingCompra" 
            block color="orange" class="text-white" rounded>Ir para pagamento</v-btn>
          </v-col>
          <v-col cols="12 pb-0 d-flex justify-center text-purple">
            <v-icon>mdi-lock</v-icon> Compra segura
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import imgs from '@/resources/urls_index.js';

export default defineComponent({
  name: 'FinalizarCompraView',
  components: {},
  data: () => ({
    imgs: {...imgs},
    loadings:{
      loadingCompra:false
    },
    currentImage: 1,
    anuncio: {
      titulo: "Televisão Smart Samsung 32 Polegadas",
      dataHora: "23/08 às 11:48",
      precoAntigo: "R$ 800,00",
      precoAtual: "R$ 500,00",
      descricao: "Televisão Completa Com Todos Os Acessórios Pezinhos, Controle, Caixa e Garantia Pela Loja que Comprei de 4 meses",
      localizacao: {
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Tatuapé",
        referencia: "Próximo ao metrô Consolação",
        cep:"03401000"
      },
      anunciante: {
        nome: "Vanderson Fernandes",
        cpf:"334.***.***-43",
        membroDesde: "abril de 2018",
        ultimoAcesso:"Último acesso há 20 horas",
        avaliacao: "4.8 (42 avaliações)",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        localizacao: {
          cidade: "Mato grosso",
          estado: "MT",
          bairro: "Tapurah",
          referencia: "Próximo ao metrô Consolação",
          cep:"78573000"
        },
      }
    }
  }),
  methods: {
    irParaPagamento(){
      this.loadings.loadingCompra = true;
      setTimeout(()=>{
        this.loadings.loadingCompra = false;
        this.$router.push({name:"pagamento"})
      },2000);
    },
    changeSlide(index) {
      this.currentImage = index + 1;
    }
  }
});
</script>

<style scoped>
.watermark {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}
.old-price {
  text-decoration: line-through;
  color: #9e9e9e;
  font-size: 1rem;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
.seller-info {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.seller-avatar {
  margin-right: 16px;
}
</style>