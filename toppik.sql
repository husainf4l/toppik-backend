PGDMP     ,    )                |            toppikdb %   14.13 (Ubuntu 14.13-0ubuntu0.22.04.1) %   14.13 (Ubuntu 14.13-0ubuntu0.22.04.1) (    h           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            i           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            j           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            k           1262    76385    toppikdb    DATABASE     ]   CREATE DATABASE toppikdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE toppikdb;
                postgres    false            l           0    0    DATABASE toppikdb    ACL     *   GRANT ALL ON DATABASE toppikdb TO husain;
                   postgres    false    3435            �            1259    83701    AuthorizedPointOfSale    TABLE     x  CREATE TABLE public."AuthorizedPointOfSale" (
    id text NOT NULL,
    logo text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    location text NOT NULL,
    branches integer NOT NULL,
    category text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
 +   DROP TABLE public."AuthorizedPointOfSale";
       public         heap    husain    false            �            1259    82604    Cart    TABLE     �   CREATE TABLE public."Cart" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "userId" text
);
    DROP TABLE public."Cart";
       public         heap    husain    false            �            1259    82612    CartItem    TABLE     R  CREATE TABLE public."CartItem" (
    id text NOT NULL,
    "cartId" text NOT NULL,
    "productId" text NOT NULL,
    quantity integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    color text NOT NULL
);
    DROP TABLE public."CartItem";
       public         heap    husain    false            �            1259    82522    Order    TABLE     p  CREATE TABLE public."Order" (
    id text NOT NULL,
    status text NOT NULL,
    total double precision NOT NULL,
    "shippingInfoId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "userId" text,
    "userName" text NOT NULL
);
    DROP TABLE public."Order";
       public         heap    husain    false            �            1259    82530 	   OrderItem    TABLE     y  CREATE TABLE public."OrderItem" (
    id text NOT NULL,
    "orderId" text NOT NULL,
    "productId" text NOT NULL,
    quantity integer NOT NULL,
    price double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    color text NOT NULL
);
    DROP TABLE public."OrderItem";
       public         heap    husain    false            �            1259    82489    Product    TABLE     �  CREATE TABLE public."Product" (
    id text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    "imgUrl" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    color text[]
);
    DROP TABLE public."Product";
       public         heap    husain    false            �            1259    82538    ShippingInfo    TABLE       CREATE TABLE public."ShippingInfo" (
    id text NOT NULL,
    address text NOT NULL,
    mobile text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
 "   DROP TABLE public."ShippingInfo";
       public         heap    husain    false            �            1259    82641    User    TABLE       CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."User";
       public         heap    husain    false            �            1259    82480    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    husain    false            e          0    83701    AuthorizedPointOfSale 
   TABLE DATA           �   COPY public."AuthorizedPointOfSale" (id, logo, name, description, location, branches, category, "createdAt", "updatedAt") FROM stdin;
    public          husain    false    217   y6       b          0    82604    Cart 
   TABLE DATA           H   COPY public."Cart" (id, "createdAt", "updatedAt", "userId") FROM stdin;
    public          husain    false    214   <       c          0    82612    CartItem 
   TABLE DATA           j   COPY public."CartItem" (id, "cartId", "productId", quantity, "createdAt", "updatedAt", color) FROM stdin;
    public          husain    false    215   �<       _          0    82522    Order 
   TABLE DATA           v   COPY public."Order" (id, status, total, "shippingInfoId", "createdAt", "updatedAt", "userId", "userName") FROM stdin;
    public          husain    false    211   =       `          0    82530 	   OrderItem 
   TABLE DATA           s   COPY public."OrderItem" (id, "orderId", "productId", quantity, price, "createdAt", "updatedAt", color) FROM stdin;
    public          husain    false    212    A       ^          0    82489    Product 
   TABLE DATA           v   COPY public."Product" (id, name, description, price, "imgUrl", "createdAt", "updatedAt", featured, color) FROM stdin;
    public          husain    false    210   �E       a          0    82538    ShippingInfo 
   TABLE DATA           W   COPY public."ShippingInfo" (id, address, mobile, "createdAt", "updatedAt") FROM stdin;
    public          husain    false    213   �I       d          0    82641    User 
   TABLE DATA           O   COPY public."User" (id, email, password, "createdAt", "updatedAt") FROM stdin;
    public          husain    false    216   !L       ]          0    82480    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          husain    false    209   >L       �           2606    86639 0   AuthorizedPointOfSale AuthorizedPointOfSale_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."AuthorizedPointOfSale"
    ADD CONSTRAINT "AuthorizedPointOfSale_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."AuthorizedPointOfSale" DROP CONSTRAINT "AuthorizedPointOfSale_pkey";
       public            husain    false    217            �           2606    82619    CartItem CartItem_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."CartItem" DROP CONSTRAINT "CartItem_pkey";
       public            husain    false    215            �           2606    82611    Cart Cart_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Cart" DROP CONSTRAINT "Cart_pkey";
       public            husain    false    214            �           2606    82537    OrderItem OrderItem_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."OrderItem" DROP CONSTRAINT "OrderItem_pkey";
       public            husain    false    212            �           2606    82529    Order Order_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Order" DROP CONSTRAINT "Order_pkey";
       public            husain    false    211            �           2606    82496    Product Product_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pkey";
       public            husain    false    210            �           2606    82545    ShippingInfo ShippingInfo_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."ShippingInfo"
    ADD CONSTRAINT "ShippingInfo_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."ShippingInfo" DROP CONSTRAINT "ShippingInfo_pkey";
       public            husain    false    213            �           2606    82649    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            husain    false    216            �           2606    82488 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            husain    false    209            �           1259    82650    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            husain    false    216            �           2606    82625    CartItem CartItem_cartId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES public."Cart"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 K   ALTER TABLE ONLY public."CartItem" DROP CONSTRAINT "CartItem_cartId_fkey";
       public          husain    false    3267    215    214            �           2606    82630     CartItem CartItem_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 N   ALTER TABLE ONLY public."CartItem" DROP CONSTRAINT "CartItem_productId_fkey";
       public          husain    false    3259    210    215            �           2606    82651    Cart Cart_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 C   ALTER TABLE ONLY public."Cart" DROP CONSTRAINT "Cart_userId_fkey";
       public          husain    false    3272    214    216            �           2606    82572     OrderItem OrderItem_orderId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 N   ALTER TABLE ONLY public."OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";
       public          husain    false    3261    211    212            �           2606    82577 "   OrderItem OrderItem_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 P   ALTER TABLE ONLY public."OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";
       public          husain    false    3259    210    212            �           2606    82567    Order Order_shippingInfoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_shippingInfoId_fkey" FOREIGN KEY ("shippingInfoId") REFERENCES public."ShippingInfo"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 M   ALTER TABLE ONLY public."Order" DROP CONSTRAINT "Order_shippingInfoId_fkey";
       public          husain    false    211    3265    213            �           2606    82656    Order Order_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 E   ALTER TABLE ONLY public."Order" DROP CONSTRAINT "Order_userId_fkey";
       public          husain    false    211    3272    216            e   �  x��Z�n�F]�_�����Ү�5@����pf��eKN�.�ة�(����-�'����td�9��(���yνw�x�37�ŝ���d�1y4Yۉ��tg���|�U�G��z��G�q�_�V�Շ����QuR?Ù�Q}P������������C����K\y�^�p �����Jx��nտիfM�}����j�`2n3��n�ĕ�f�r �NG����/ ����A��r�	���9�y}���>:�\�k�.���/�ѫv�#�?=�C1jH�۩�x��mL6{s�95	����;�����ц�!����tTo�����:i�zT�7�^�3�;m���{8��~t�m7��7��:z�>��͌ўU�O�ۄ�23���H��x�0m2x�,�!��.��9=��c�m;A�}y�1���:��p�w������)E܌��_*ח���՟w�Ⱦs�2s�}���x3��L��?{�g��E�`v�L��=��6�|#�)>��IC��Ф�Q�+$ĩ���I�/܇L���2��29\UU�SU�Ҫګ�Y:U]��VU�]��2�*���,���z��SU������^]Ͳ�*_��WU��}�RU{�?˦�w�6˧�=�OUE��f�TU,no����s�%QUѣ�Y2Uw�6K�����ᩪ�֞nmL\�����n"��#�ǯ(�-e�XY���Okو�1�1���"�����J�H\0<��#�S#$������*QGU�-4U�����*��D(K@�@w� ��:�9�eGu���#l��V���������,8���`0��y(b*m�|	w�$���&!�R� ��y�￞���^pms��wʽ߻W�z����IC���p�g��+�?à�gXQ���?�p�g��+�?à�gXQ�Y��������g9hV��+�����:�rp�\iVځ�_�Yp�{*�l��Xȱ��26���/Z-{U*s�x4!Y�h �ZZ�|R"��_��u^QN���Q�Xc�62�sN�b7���a�eW��33���V]�r,t��

�S��aYM����3:	_�X%,)�	M�v���ʀ����;X�/!	1�Y���/1\T�6�뒋�� �FI@F�J��P
���"�\�h����/D� :��oc��W����v̶w�uX�i���*i.lY�} �4%�ВH-�a�Q��~�Zk���Pn!SH�ZJ�����\�E��?�n@|,E�j����9g���I"���E���1��%8�!�p�$��6
+ū�8=�������.���c�
�����rȩ����	�����'X�%�R:͂-��,�M�T+'-�	�Rb���b/�7���x�.�Ӧ0�}]/�/����a���OE����ÞM      b   o   x�u���0���Y `��C�i0v���}�R���Ͼt9�O�`�����q��ad4`<��&C��꫿��#O���H&�� ��[����=�C� �����UK)?�?'�      c   z   x�uʱ�0@�Z�"���i���d�:^ ���iH�tl �7x�f��Kw+�1R��<dN[NOv��^�E��6��g
�!����ҳPad4`|�8��L���wޟ�>j�?�'~      _   �  x�}��n[G���S�(9��v��h�m6��ƀc����~�-�Ǹ�B� $��9��fJ&�X������`�Rs��!~�c>���Rx�kH	�)�QHך�9��dV�<��$��c:�r���ֿ���鉾�x}����Om�xz����4�̤aj��"�k��k�Z��,��T{$w6����U��|Ǡec����w�R�U��TX��\7ʐ��9�]��n�G[T�7��0g������,�$����6}�׃��� ��H-5rk�z]3h��fN���P����d3c�-[��ﺦp��T���R�R?����o�qao3fkTRJ�\^�i�j����,s�>��k���gȲNq�K�hV��r�t��K���<�z�������yX,2�M*�ay5�	�*�rg��������h���è�ė��%�Q����������F|�����b�y{}�N��X���[��n��c�
��W�҉��9�i|�4������:`���G?.{y:,x
be�2}S�,��a%x?�0��Rʘ��]��"ؒ��?0!�$;�;��Z
963�aD�!Q�tp/s�w��8�W�rj=0B��52<�vߺ�9��/�;�P��[��E4t�dJ�����o@~�VT�+t�ed!��o�[5ճȦ���6��|��9��\��q5�f�ؼ�ɔ��v�x5A�j�{�wQ�IN9�n}�-wH;bni�M�ꄳT(H�\{�2��M���R�l���|��$���LWǆ���5�C8]����C�b��)R*}�dh�0db��u�l� M�5\�Xi��r�N6��*y1�k��{!"��n}��?[���D�^͐\4}е"Z��5ۜ�zxpR�q�a�cX,���bi)va�H���U�Υ�1���1cA� 02v"l�"�/L��=�-����6'Ձ'���[掠��7�.����~9�� �4      `   �  x���M�$E��٧��v8v.gÆ#��_@ �FH���153Ԧ�]����~~v��cem(iD��ۢj��L����}��b�bN�����d�8���T���Ĥ]ue����%!j���tH��$��˙�-j<����_^rV|8E��;(jg
�=[X_���V���4�I=�DRq}���4�֋��?��VgoZ(Zޤ���$�!{EfףX�xTZ	W��R��Ŝ�hZk��lh����֐xj�O6c�k�����O���=���?���������c�l��i�o�Tk�@��|�J���<�K��J앴���<oIgη��0~���2�"i���2�N%6�=��ف��lީ��C|=��/�,ٽv�?�*7-_+�s��w�<�B��.P.�M]�ܮ]ݤAo�E�tt^�PA��K��6�[o�y^>9ݼ~��o���U2ܠ�k��-n���ݡ��>�x�@V��>��Ͻ�OF�=͛���_��s��7�4pw�.H��e!i���;�.~1d�K��ȽP+�-mv���*�Ƀ�=+����L�6r;\!���@$ފ�4�1K/�2
�o�R!�T�r�:yԵ�i+q��
���w�_A4�RaR���s���q;�#�<���h��``8e���W1n6u�_A9-r�!��Pɒ�g�Ys{2�q�\]_0(��@� [�	]o�U�� �a��8XZ�j�5x�h�	�N)L1��i�Y�"7��0�� �2t��1�*H�S_�gSV�kp6����e�j�!O22���gH�5ũ�L�v��_���Wl{0�~��ɴ�{q�"��밝�l��g*u\v�:uT�؅C5Vj�����pûO������9�}C+|�Rʰ��0�)��ll���� @��]�-�ݱ]�w$��I!�޸�[�F�/8��#˖�Qޑ4?O�)F�檿����V��6�ic���H�yҼk����a�U`4�3�V���u�zG��<�,�a�N�zE��㣿{_Y�ׂ�F�cO���$�>��+Aќ�|�|`a��t��Ԗ�~(���<`�������'����fL�J���<���=2F�	F~n)��F�Qa�3_I��v�"�}��c�1�A_�v�8x��P"��6>�����%��O��;�������p{yy��+�      ^   �  x��ok#7�_۟B䵵��Үd(%iһ�פ���P(ZIk��.+9(���΅�k
׾	��,ig�����u�TC57Xׂb�h�%����RUM;�����[�Gt����a�~�#bu!��oOo�;x_�8<Cm�[d���Ek7���>9f��\�h�K�$�t�Χr�>�i���4�`#J=�!&�3��ɡ�rH��p�������HZy���v�u�@z~~uq��}�����;_BΫ!zD?�S��NF�ǈ~�k����5Է:(�)'���o�J�4�>A	[���5.�9�h c�k�x}�~��]^\���+���Շ� 1���V�34�3'`o�rP�g}a�;��	m��� A�`}>tz�}py3���
��WP������.B6:���c��H��Ǳ+g��һ~\��CPz p���=4���]��rG+���P2`�L�2"���B̕�@��!D&�wjF?�}�'��!m\H��BG�'M���i?tP�f��� �UJC\��i���ύ��9̮ݚ{8g��a�q���Z,�;���an:Ў��˒�QV��8,����
�$�(�'�0��Č Z/�Z�uA���i��Y�:;9� �l������_��ӷ3��foF��8�Ec��HTT5�k���)IT����>����>��|@��EY�׿��d��VbiI~` �S�KR��1�xe�>p��"ȿ�� �z^���EI��� ��uM6�֘��a�6��*�%���G8����(y�F�
��F�Ȃ��H�A)-�-m���PJq#t�aVԍUV�ɩ���旫ˉ�6j;)���p�at����C���ZJF��2�_��Z0ZЪ�z]��+��L�qj�y%�j*07�`I8 R�ltKK��d���C�H �U�)���̙��v�zm�Q�Ru��s��GK�(U�Ban�,�!��.
���EU��s������/��      a   �  x���I��FE��)x �1dfw�.�x�#d��nT�!˧wԢ�ʄP-��ÏϳS!��A�Pz-�C�@�p�X��ߞ���^��1�KȖ�m�
���y�$g|5�$��#�4�RP�q�2�U
�j�o_%�3�����N0l$�
J݀%��1U^�k/K�!s���EJ;��7��AS&H%L����5�QcיQ�]C'Z1̻���5a�6"A�� �%�l:�R�,ی���O/��~������������\�O��K
h��)>�	�"|�W�_f�
V����`:�!�ר�e)�;����7�Φ���@���G�� �(�1���X�>l?]������������۴�|��}"�{��r/�����Fm�o)���4���~�?�Q���/_5sW�,�k�����~.-͞H��],��;;0�1<�����S��E@Pnw94�T���M{�?߳���H�|U�%�@����V��ʬ�6*�δ��刴'�3�����~&��Wb���U�wJW���C�`����*T�'�����0M���@{g4_b]�o�o6�������hR�
��O�<�(r����Mͣ-��Ȍ35��GR��rȉZ�^�;&L[���(�;;��/���� �ɘ      d      x������ � �      ]   �  x��V�n�7��<E�)J�b���@"% @n��{�v�qꤻ���O>G<?t�5l�b���ãxv)ܵJ��c�˔9L���,#'%�fs�"�S�Ol�D�̲%�6�+��BV�?R}��X�a������_�qe���̼�����קk����%�OϹ�����_~�������3��o��UFv+Լ��l�����N+G[[nَ���}�ɒL{�I�Y{����r��(G;�:�X��BA�Y�>hWV��ZU&�f�O_>}���s�7/�qqʽ�"|��۹��2݀s]��:�P1�I����S�SviZ�:��Z_B3�q��y���Q�L�xg�D����?}Zۭ��BUc�6�j��O�ّ����}�s|�^*1\��*�ET�����659z8�e
}�3�;�����C:�
��[f�e�b#���������M�}[�ڕ�����ggo�� ��ct�f�>T�Wl�lד�]\[�C�d��j
x�G���/6��f$b�Ƽ���5Yk��/p�7��ۮ{BWMcD��0��Cڑ12�\gw�B�q������o8s���~��?@�.k/�O���(�6���)7��n	59�׸�܄���Tb#�N�q&1䓰�C���!)�����wn7�n���e\����G��A\�U�=rE��z�O�;��K�5��g���}������cgj�Ut�ڲ�&Hfrf��X�L�;����-�ʵ����/O�?��\g�*��iM�%����\ܳ����vY�&Sz]kMZ�>��}�w�̊��!.T������}����@���<Ӑ?� �DOQ!/m�C򔽶0d�b�өn&_h?A]�sLBK�f��:,���P��9��Ն�������G��^;�NE�K+�d�F:��&����5�%�^ZU�]P�Hj��YX�p��	�#.X��΀��Z�������:0)�5�'E����}������T��ے�{���\Ӳ� lGQX���$T�A��B:��j�iF�8��3P�ws���?�xps\�=~�]ǻ�p�X���(&�E$
Y�,G3�����D~ݚ��W}BA�����!�Y0�X���X�g���=��io���k<H{�)!J�fS��PA���\N�	�Ґ�	Vk�<NDd��A�XU+x��}Lv��`�m���Xy���b*�:I�m|���= ��7Ԙڿ��r(Ý�����Ç��h�F     