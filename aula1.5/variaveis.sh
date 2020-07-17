#!/bin/bash

# echo "Digite sua idade "
# read IDADE
# echo "Eu tenho $IDADE anos"

# VARIAVEL=`whoami`
# echo "Eu estou logado com o usuario $VARIAVEL"

# VARIAVEL="Cleber Fontinele de Souza"
# echo "Prazer!, Meu nome é $VARIAVEL"
# echo "Tenho $idade anos!"
# read idade
# echo "e estou logado com o usuario `whoami`" 

# echo "Hello World"
# echo "Olá, qual o seu nome?"
# read NOME

# echo "Muito prazer, $NOME!"

# echo "Qual a sua idade?"

# read idade

# if [ $idade -lt 18 ]
# then 
# echo "Você é menor de idade!"
# else 
# echo "Você é maior de idade!"
# fi 

# read -p "Qual é o seu nome:" NOME

# VARIAVEL="cleber"
# echo "prazer meu nome é $VARIAVEL" #se tirar isso não existe
# if [ $VARIAVEL ]
# then 
# echo "variavel existe"
# else
# echo "variavel NÂO existe"
# fi

# echo "Qual sua idade ?"
# read IDADE
# if [ "$IDADE" -ge "16" ]
# then
# echo "Sua idade é $IDADE, então você ja pode votar"
# else 
# echo "Sua idade é $IDADE, Você é menor de idade então NÂO pode votar"
# fi

#EXERCICIOS 1 Ao 7

# echo "Schell script é demais!" #1
# VARIAVEL="Schell Script com variaveis é demais" #2
# echo $VARIAVEL
# echo "Este script esta rodando no computador `hostname`" #3

# FILE=/home/cleber/variaveis.sh              #4
# if [ -e "$FILE" ] # -e comando para verificar se o arquivo existe
# then
# echo "O caminho variaveis.sh está habilitado!"
# fi
# if [ -w "$FILE" ] # -w comando para verificar se O arquivo tem permissão de escrita
# then
# echo "Você tem permissão para editar variaveis.sh"
# else
# echo "Você NÂO pode deitar variaveis.sh"
# fi

# echo "Digite o caminho de um arquivo ou diretorio"     #5
# read FILE
# if [ -f "$FILE" ] # -f comando para verificar se é um arquivo normal
#     then
# echo "$FILE é um arquivo comun"
# elif [ -d "$FILE" ] # -d comando para verificar se é um diretorio
#     then
# echo "È um diretorio"
# else 
# echo "SFILE é outra coisa"
# fi
# ls -l $FILE

# echo "Digite o caminho de um arquivo ou diretorio"     #6
# FILE=$1
# if [ -f "$FILE" ] # -f comando para verificar se é um arquivo normal
#     then
# echo "$FILE é um arquivo comun"
# elif [ -d "$FILE" ] # -d comando para verificar se é um diretorio
#     then
# echo "È um diretorio"
# else 
# echo "SFILE é outra coisa"
# fi
# ls -l $FILE

  #!/bin/bash

#   DIRECTORY=$1               #7
#   if [ -d "$DIRECTORY" ]
#     then
#       FILES=`ls -l $DIRECTORY | wc -l`
#       echo "O $DIRECTORY tem $FILES arquivos."
#   else
#       echo "O argumento $DIRECTORY não é um diretório!"
#   fi

# BONUS

# PALAVRAS="shell script usando estrutura de repeticao for"  # 1
# for PALAVRA in $PALAVRAS
# do 
#   echo $PALAVRA
#   done


# # ARGS=$@             #2
# for ARG in $ARGS
# do
# if [ -f $ARG ] 
#     then
# echo "é um arquivo comun"
# elif [ -d $ARG ] 
#     then
# echo "È um diretorio"
# else 
# echo " é outra coisa"
# fi
# ls -l $ARG
# done

# ALLFILES=`ls *.png`   # 3
#  DAY=`date +"%Y-%m-%d"`

# for FILE in $ALLFILES
#  do
#      mv $FILE "$DAY-$FILE"
#  done

#  DIRECTORY=$1   # 4
#  EXTENSION=$2

#  cd $DIRECTORY

#  ALLFILES=`ls *.$EXTENSION`
# DAY=`date +"%Y-%m-%d"`

#  for FILE in $ALLFILES
#  do
#      echo "Renomeando $FILE para $DAY-$FILE"
#      mv $FILE "$DAY-$FILE"
#  done
