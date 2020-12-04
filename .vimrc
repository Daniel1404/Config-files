" ### VIM CONFIGURATION FILE OF DANIEL DIAZ ###
" #
" #  ____   ____
" # |  _ \ |  _ \   Copyright (c) 2020 Daniel Diaz
" # | | | || | | |
" # | |_| || |_| |  http://www.github.com/Daniel1404/
" # |____/ |____/
" #


set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" Colorscheme: Dracula,my prefered
Plugin 'dracula/vim', { 'name': 'dracula' }
" FILESYSTEM
Plugin 'preservim/nerdtree'
Plugin 'ctrlpvim/ctrlp.vim'
" Vim powerline and themes
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

" END OF PLUGINS
call vundle#end()            " required


" OTHER SETTINGS
" Set the system clipboard instead of vim clipboard
set clipboard=unnamed
" Set leader to space
nnoremap <SPACE> <Nop>
let mapleader=" "

" NERDTREE
" Set Nerdtree to open if no files specified
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
map <space>n :NERDTreeToggle<CR>

" MANAGE WINDOWS
map <leader>h :wincmd h<CR>
map <leader>l :wincmd l<CR>
map <leader>j :wincmd j<CR>
map <leader>k :wincmd k<CR>

" CTRLP File finder
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

let g:ctrlp_working_path_mode = 'ra'
" Colorscheme
colorscheme dracula
" Set left side line numbers
set number 
