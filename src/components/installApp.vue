<template>
  <div>
    <button ref="addButton">ERTERT</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Swal from 'sweetalert2'

  export default {
    name: "Home",
    components: {

    },
    data() {
      return {

      };
    },
    mounted() {
      let deferredPrompt;
      const addBtn = this.$refs.addButton;
      addBtn.style.display = 'none';

      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        addBtn.style.display = 'block';

        addBtn.addEventListener('click', () => {
          // hide our user interface that shows our A2HS button
          // console.log(e)
          addBtn.style.display = 'none';
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              Swal.fire({
                type: 'success',
                title: 'יופי',
                text: 'האפליקציה הותקנה בהצלחה!',
                timer: 1500
              });
            } else {
              Swal.fire({
                type: 'error',
                title: 'אופס...',
                text: 'ההתקנה נכשלה',
                timer: 1500
              });
            }

            deferredPrompt = null;
          });
        });
      });
    },
    computed: {

    }
  };
</script>

<style scoped>
  .title-row {
    background-color: #ff5959e8;
    color: #fff;
  }

  .while-row {
    color: #083538;
    background-color: #facf5a;
    margin-top: 2px;
  }

  .while-row .mga {
    border-left: solid 1px #fff;
  }

  .while-row .gra {
    border-right: solid 1px #fff;
  }

  .while-row h3 {
    font-size: 65px;
  }

  @media (max-width: 767.98px) {
    .while-row .mga {
      border-left: none;
      border-bottom: solid 1px #fff;
    }

    .while-row .gra {
      border-right: none;
      border-top: solid 1px #fff;
    }
  }
</style>