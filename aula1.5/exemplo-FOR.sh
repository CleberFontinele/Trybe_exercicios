#!/bin/bash

                    #EXEMPLO 1
#usar for seguido va variavel TECNICA "in" indica a lista com as palavras
# echo "              Minha habilidades"
# for TECNICA in Hadouken Leigan Kamehameha "Final Flash"; # aspas por que a habilidade tem duas palavras
# do
# echo "Eu sei dar" $TECNICA
# sleep 1
# done

#                 EXEMPLO 2
# echo "     sequencia numerica"
# for N in {1..7}; #imprime o numero de 1 a 7
# do
# echo "Numero" $N
# sleep 1
# done

                #EXEMPLO 3
echo "    Teste PING em sites"
for SITE in $(cat testePing.txt);
do
echo
echo "Pingando site" $SITE
ping -w1 -c1 $SITE
sleep 1
done
