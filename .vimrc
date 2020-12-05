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

" CSS colors
Plugin 'ap/vim-css-color'

" Python Development
Plugin 'vim-scripts/indentpython.vim'
Plugin 'tpope/vim-commentary'               " Comment stuff out
Plugin 'vim-syntastic/syntastic' 	" Sintax highlighting
Plugin 'nvie/vim-flake8'		" PEP 8 CHECKER END OF PLUGINS
" Autocomplete
Plugin 'neoclide/coc.nvim'
call vundle#end()            " required


" OTHER SETTINGS
" Set the system clipboard instead of vim clipboard
set clipboard=unnamed
set encoding=utf-8
" Set leader to space
nnoremap <SPACE> <Nop>
let mapleader=" "

" Set these settings for python Develompment
au BufNewFile,BufRead *.py
    \ set tabstop=4
    \ set softtabstop=4
    \ set shiftwidth=4
    \ set textwidth=79
    \ set expandtab
    \ set autoindent
    \ set fileformat=unix
" Set these settings for web dev
au BufNewFile,BufRead *.js, *.html, *.css
    \ set tabstop=2
    \ set softtabstop=2
    \ set shiftwidth=2

au BufRead,BufNewFile *.py,*.pyw,*.c,*.h match BadWhitespace /\s\+$/

" NERDTREE
" Set Nerdtree to open if no files specified
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
map <space>n :NERDTreeToggle<CR>
" File systems
"
" Enable folding
set foldmethod=indent
set foldlevel=99

" MY MAPS
" MANAGE BUFFERS
map <leader>h :wincmd h<CR>
map <leader>l :wincmd l<CR>
map <leader>j :wincmd j<CR>
map <leader>k :wincmd k<CR>
map <leader>w :w<CR>
map <leader>q :q!<CR>
map <leader>s :sp<CR>
map <leader>v :vs<CR>
" For manage tabs
map t :tabnew<cr>
map T :tabnext<cr>
" map <leader>tm :tabmove<cr>
map x :tabclose<cr>
" map <leader>eo :tabonly<cr>
" CTRLP File finder
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

let g:ctrlp_working_path_mode = 'ra'

" Colorscheme
colorscheme dracula
" Set left side line numbers
set number 


""""""""""""""""""""
" PYTHON SETTINGS
"""""""""""""""

let python_highlight_all=1
syntax on
autocmd FileType python map <buffer> <leader>c :call flake8#Flake8()<CR>

