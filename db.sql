DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

INSERT INTO posts ( title, body )
VALUES ('Incidunt eum fugit dolor est est aliquid.', 'Aspernatur sunt nihil. Itaque quisquam et dolor illo sapiente temporibus aut et blanditiis. Dolores quisquam voluptas vel eos odit voluptas quam. Velit tenetur enim dicta rem omnis. Voluptatibus praesentium ex enim natus asperiores inventore.');
INSERT INTO posts ( title, body )
VALUES ('Provident voluptatem nam.', 'Ut magni et nobis repellendus ut repudiandae sit. Impedit soluta fugit dolorem officiis. Quia nesciunt asperiores tempora odio sed dolores veritatis odio rerum. Corrupti quia delectus. Porro amet sit magnam voluptatum voluptas officiis. Qui omnis rerum tempora aut in soluta.');
INSERT INTO posts ( title, body )
VALUES ('Quia ea totam voluptate sunt at iure a repellendus.', 'Totam ex perferendis quod. Aut et ut dolores ut facere dicta dolor. Labore voluptatem soluta quod.');
INSERT INTO posts ( title, body )
VALUES ('Labore veritatis qui molestiae qui facere quod.', 'Esse magni atque id molestiae et. Similique sint quibusdam facere nemo qui pariatur. Natus dolores quos ducimus. Nihil qui asperiores dolor nulla. Numquam iusto ea et.');
INSERT INTO posts ( title, body )
VALUES ('Natus qui eos illum quis et suscipit rem et aut.', 'Tempora est autem ad ipsum tempora ullam. Eum sapiente praesentium omnis veniam hic quas sint voluptatibus. Voluptatem incidunt occaecati voluptate dolor quo sapiente. Sapiente sunt iure est quo. Dolores eligendi hic tempora sint est aut. Numquam eos delectus.');
INSERT INTO posts ( title, body )
VALUES ('Aut eum asperiores qui eum temporibus odit eaque dignissimos possimus.', 'Sint numquam quidem deleniti optio. Excepturi consequatur accusantium sint. Nobis quia laborum sit et quis rerum.');
INSERT INTO posts ( title, body )
VALUES ('Architecto maiores sapiente.', 'Quas repellendus corrupti doloribus id sunt numquam illum. Eos rerum autem libero. Unde voluptas culpa mollitia magnam numquam nemo labore provident. Voluptate aperiam rerum modi nulla eveniet. Numquam magnam quia aliquid.');
INSERT INTO posts ( title, body )
VALUES ('Quam assumenda aut in quisquam.', 'Animi est minus illo sunt sint at perspiciatis nulla accusantium. Cumque possimus quod adipisci sit. Qui aut impedit omnis et ex officiis vel omnis fugit. Modi recusandae et. Minima officia est officiis animi rem at dolorum ad.');
INSERT INTO posts ( title, body )
VALUES ('Nam placeat voluptatem sed nesciunt.', 'Aut quisquam beatae neque omnis. Incidunt est qui rerum minus quis illo porro laboriosam. Laudantium cum adipisci aperiam aut velit est culpa. Itaque dicta sit voluptatem quos rem ut. Ut maiores corrupti nemo veritatis eius est.');
INSERT INTO posts ( title, body )
VALUES ('Libero perferendis repellendus.', 'Illum harum nulla ipsa architecto. Explicabo aut sit odio iusto qui. Vel est numquam similique tempora nulla. Cumque error incidunt dolores. Voluptates recusandae ipsum dolor cumque eveniet aut dolore odit.');
INSERT INTO posts ( title, body )
VALUES ('Magnam non totam provident voluptatem ut cupiditate nihil.', 'Sunt ab ea velit doloribus. Incidunt et error. Occaecati quidem voluptatem sunt eveniet. At tenetur quaerat animi esse perspiciatis nihil voluptas.');
INSERT INTO posts ( title, body )
VALUES ('Rerum aut nemo rem rem voluptas facere expedita alias.', 'Non vel ut nisi nisi minus. Delectus reprehenderit in quaerat. Esse aspernatur officia fugiat. Molestiae repellat esse. Repellendus hic tempora quibusdam molestias saepe.');
INSERT INTO posts ( title, body )
VALUES ('Architecto commodi placeat at dolore.', 'Commodi corrupti consequatur quo quis voluptatum natus enim et. Quisquam rerum error inventore sit et. Quis veritatis est officiis sed repellat eaque esse. In suscipit quaerat sed. Odio qui maiores rerum dolorem vel voluptatem tenetur nobis. Nihil incidunt voluptas at iusto quos voluptates optio voluptas accusamus.');
INSERT INTO posts ( title, body )
VALUES ('Quos non nobis ea sequi at.', 'Necessitatibus recusandae sint eius sed ullam voluptates eligendi doloremque. Qui ullam et veniam nostrum hic consequatur. Nihil accusamus ea dicta qui delectus vitae sit accusantium doloremque. Nihil non veniam est est. Dignissimos magnam voluptas sint quia non voluptas.');
INSERT INTO posts ( title, body )
VALUES ('Consequatur qui accusantium laudantium aliquam.', 'Vitae nesciunt hic nihil cupiditate blanditiis omnis est. Reiciendis omnis nam eos minima. Esse suscipit asperiores sit alias. Aut veniam odit omnis. Quibusdam nam et quasi nostrum voluptatem ut.');
INSERT INTO posts ( title, body )
VALUES ('Aut in et accusamus laborum.', 'Quas ut et deleniti eos nobis quaerat quam et neque. Aliquam omnis laboriosam ut debitis aut in autem voluptas. Doloremque enim quas. Sequi unde accusantium ut consequatur aut officia.');
INSERT INTO posts ( title, body )
VALUES ('Voluptatem rerum beatae et officia itaque.', 'Atque porro ut mollitia est vero inventore doloribus dolor ut. Laboriosam doloremque porro quia unde vero voluptas quae deleniti neque. Earum architecto inventore sit minus molestias nemo.');
INSERT INTO posts ( title, body )
VALUES ('Cum sunt sint sed in.', 'Totam molestiae accusantium distinctio suscipit et aperiam necessitatibus. Voluptatem repellat dignissimos pariatur ex officia reprehenderit in. Laboriosam sunt maiores veniam.');
INSERT INTO posts ( title, body )
VALUES ('Praesentium asperiores sapiente facere officiis eos non.', 'Perspiciatis molestiae enim sed odit. Animi similique iste veritatis facere et aut sint maxime velit. Neque hic mollitia exercitationem illum temporibus. Quod fugit voluptatem rerum est beatae adipisci vel et voluptatum.');
INSERT INTO posts ( title, body )
VALUES ('A adipisci facere qui iste maxime.', 'Porro porro iste. Nam quia recusandae suscipit architecto. Quis sit rerum. Non ipsum deleniti. Accusantium officiis enim nobis harum voluptatum consequatur. Accusantium eveniet a et et dolor.');
INSERT INTO posts ( title, body )
VALUES ('Ipsa est odio quas.', 'Sit in fugit magni nihil in. Ducimus et amet qui blanditiis. Id qui ullam pariatur aliquam similique possimus ut consequatur est. Rem laudantium labore quibusdam sit natus maiores ab qui ut. Laborum quia dolorum ut asperiores.');
INSERT INTO posts ( title, body )
VALUES ('Sed et sequi dolore aut.', 'Odio quaerat dolorem qui earum ullam numquam voluptatem omnis. Esse enim iusto nesciunt dolorem. Dolores quod facere. Consequatur molestiae quis quisquam qui et sint dicta eos quaerat. Nihil cupiditate nostrum molestiae maiores. Unde ad consequatur impedit.');
INSERT INTO posts ( title, body )
VALUES ('Ut et quia ut sint numquam.', 'Tempora qui aut neque molestiae sit et at. Fugit voluptatem nostrum aut quam cumque quae accusantium. Iure praesentium possimus accusamus. Incidunt error eum in ea sint distinctio laborum accusantium ea.');
INSERT INTO posts ( title, body )
VALUES ('Aut voluptates aliquid.', 'Sapiente praesentium dolorem sequi itaque optio eveniet enim esse. Eum perspiciatis tenetur neque qui voluptates dolorem unde quis nobis. Quo voluptatum aspernatur amet a deserunt vel dolor.');
INSERT INTO posts ( title, body )
VALUES ('Vel atque corporis quia alias.', 'Dolor tempora consequatur nam id sunt laboriosam quo. Fugiat aut eum qui. Omnis nihil voluptates qui numquam debitis corrupti. Non fuga et voluptas. Soluta aut temporibus vitae itaque quas quaerat sit sed.');
INSERT INTO posts ( title, body )
VALUES ('Placeat quis iusto aliquam sint fugiat.', 'Voluptates error ut fuga beatae voluptatibus voluptates. Eaque alias molestiae vero. Est eveniet sed reprehenderit laboriosam atque neque iste repellat qui.');
INSERT INTO posts ( title, body )
VALUES ('Cum ea sint officia.', 'Id dolorem excepturi fugiat voluptatem culpa. Adipisci ea recusandae veniam architecto occaecati et itaque repudiandae. Expedita animi alias nihil quo perspiciatis natus et. Recusandae ut eum. Et consequuntur consequatur et ad accusamus officia.');
INSERT INTO posts ( title, body )
VALUES ('Sequi nesciunt eius perspiciatis cupiditate dicta laudantium at.', 'A aut optio necessitatibus a doloremque neque praesentium quia fugit. In voluptatem cumque architecto adipisci eaque. Deleniti praesentium aspernatur odio aut est rem quisquam. Aut illum autem delectus rerum placeat quaerat aliquid. Fugiat dolorem modi repudiandae non ea aut a.');
INSERT INTO posts ( title, body )
VALUES ('Temporibus minima maiores consequuntur quam aliquid explicabo quasi qui.', 'At quibusdam veritatis nisi. Eum vero ipsam molestias assumenda animi dolor quia. Sit quo vel sit consequatur dolor aut qui officia. Voluptate ullam rerum non minus iusto. Aut architecto architecto. Nam dolor dicta tempore.');
INSERT INTO posts ( title, body )
VALUES ('Nihil vero iste rerum dolorem optio hic.', 'Quasi molestiae fugiat. Aliquam magnam voluptatibus error. Excepturi quae eum ducimus magni placeat suscipit voluptates ut. Sapiente quis asperiores laudantium dolorum error tenetur omnis accusamus.');
INSERT INTO posts ( title, body )
VALUES ('Suscipit veniam cumque porro nulla.', 'Ipsam distinctio corporis ullam officia earum. Rerum quisquam numquam voluptate ut dolore est doloremque commodi. Adipisci vero tempora vitae perspiciatis sed qui sunt officiis ut. Vel dolore quisquam nisi ducimus quia architecto et tenetur.');
INSERT INTO posts ( title, body )
VALUES ('Voluptas at et aut ipsa.', 'Repudiandae eos est dolor ea aut architecto debitis quo deserunt. Et exercitationem quae voluptas animi eum ut ipsum. Quidem ut ipsa et mollitia aliquam quia atque. Quia ducimus qui.');
INSERT INTO posts ( title, body )
VALUES ('Iste nihil expedita laudantium quia sint incidunt ex perspiciatis.', 'Rem nesciunt numquam esse cum. Quia quaerat pariatur et iusto. Corporis qui ab. Fugiat nisi sint sed. Omnis voluptatem minima repudiandae quia omnis. Repellendus explicabo quia ab est enim earum.');
INSERT INTO posts ( title, body )
VALUES ('Consectetur et quo eius laudantium dolorum.', 'Magnam corrupti molestiae ut cupiditate earum eum explicabo perspiciatis asperiores. Incidunt rerum dolore placeat rerum necessitatibus nemo esse. Qui velit dolore quae. Cum mollitia omnis. Commodi quasi nihil minima quo. Rerum voluptatem fugiat rerum.');
INSERT INTO posts ( title, body )
VALUES ('Aut nisi omnis fugiat sint earum et aut.', 'Dolorem vel provident autem soluta nihil enim eum sed. Debitis eligendi qui natus ut nihil vero. Dolorum distinctio deleniti mollitia assumenda et. Eos assumenda rem eius rerum et et atque qui exercitationem. Inventore quia cumque quis quae et qui facilis aut. Aliquam rerum voluptatem.');
INSERT INTO posts ( title, body )
VALUES ('Aut debitis corrupti voluptatibus sint nisi ducimus ut nesciunt officia.', 'Officia iure cum necessitatibus. Sint rerum vel at molestiae tempore dolorum. Molestiae quisquam sunt quis ut ex nam. Aut cupiditate dolor sunt ad. Quis voluptas voluptatem explicabo voluptatem quos quam.');
INSERT INTO posts ( title, body )
VALUES ('Ut consequatur beatae distinctio impedit vel.', 'Odit neque maiores rem molestiae quia id ipsa odio dolorem. Placeat ad veritatis. Harum quaerat repellat dolores alias voluptatem. Numquam quisquam omnis et molestias qui saepe eum exercitationem dolorem. Assumenda earum qui minus nisi molestiae repellendus veritatis.');
INSERT INTO posts ( title, body )
VALUES ('Eius quia pariatur assumenda voluptatum exercitationem possimus nostrum voluptate iste.', 'Sit voluptas id provident cumque nihil nam earum. Molestiae est optio velit non laborum id sed. Nihil omnis voluptatem illo aspernatur cum aut magni et. Quas aliquam rerum similique ratione dolorem sequi quam fugit et. Magnam in architecto alias labore.');
INSERT INTO posts ( title, body )
VALUES ('Illum eaque porro nulla culpa et perspiciatis.', 'Impedit et rerum. Minus adipisci eos eaque eius cumque. Voluptatem fuga eum accusantium voluptatibus dolor tempore. Est rerum laborum. Et eius commodi. Rem qui dolor sequi consequuntur.');
INSERT INTO posts ( title, body )
VALUES ('Magnam labore doloremque nihil optio.', 'Omnis ut natus. Facilis et est tenetur voluptas dicta harum ipsa accusantium. Ut ea sunt nostrum adipisci voluptate. Ut dolorem sunt.');
INSERT INTO posts ( title, body )
VALUES ('Qui dolorem non et et nihil.', 'Iste ex iure illum pariatur numquam commodi inventore. Ipsa eos et mollitia nemo ut. Sunt aut praesentium et enim deserunt eum. Excepturi sit tempore. Ut autem sed aliquam iusto.');
INSERT INTO posts ( title, body )
VALUES ('Et optio vel in saepe quas vel enim quaerat.', 'Sit omnis omnis aliquam quis non quae. Ipsum quis qui alias. Rerum repudiandae minima non. Voluptatem porro enim adipisci adipisci eaque possimus praesentium vel quae. Doloremque exercitationem expedita sed maiores eaque.');
INSERT INTO posts ( title, body )
VALUES ('Doloremque molestiae laborum enim.', 'Repellendus sed nostrum. Dolores sit laudantium est perferendis sapiente illo aut. Voluptas dolorem dolorum sunt ut numquam quam excepturi. Possimus sunt sint. Assumenda et porro et voluptatum id id est earum.');
INSERT INTO posts ( title, body )
VALUES ('Officiis doloribus at.', 'Veritatis autem optio. Culpa ut inventore. Rerum aut iusto earum repellendus cupiditate cum qui totam et. Ab veniam neque.');
INSERT INTO posts ( title, body )
VALUES ('Minus unde voluptate voluptatum.', 'Minima rem aut nemo ullam enim tempore. Sunt et ratione quibusdam omnis qui. Architecto ipsa voluptatem a iste dolorum. Illo ipsam ut vitae vel repudiandae ipsa odio ipsa. Sed reiciendis quia nesciunt itaque culpa a.');
INSERT INTO posts ( title, body )
VALUES ('Praesentium qui officiis voluptates.', 'Quo aut consectetur. Deleniti quibusdam architecto. Sed consequatur aliquam assumenda.');
INSERT INTO posts ( title, body )
VALUES ('Enim et reiciendis sint eveniet possimus quo dolores voluptas magnam.', 'Quas vitae eius sunt sed aut quo neque. Tempora voluptatibus blanditiis autem nam aut eos sequi rem mollitia. Adipisci nihil est facilis ipsum. Qui voluptatem eum.');
INSERT INTO posts ( title, body )
VALUES ('Et sequi nisi nesciunt illo odit.', 'Dicta ullam aspernatur. Quo maxime vel molestiae. Esse sed ut eos vero.');
INSERT INTO posts ( title, body )
VALUES ('Non voluptates numquam facilis aut dolores blanditiis culpa rerum repudiandae.', 'Blanditiis consectetur excepturi. Eveniet aut consequatur et molestiae alias. Blanditiis voluptatem odio libero quaerat ex sunt quia. Vel ea nobis praesentium.');
INSERT INTO posts ( title, body )
VALUES ('Doloremque occaecati et harum odit sapiente non totam.', 'Omnis eos voluptatibus ratione tempore eum. Illo quae et nam. Consequatur velit sapiente id veritatis. Quia culpa sint ut molestias. Fugiat dolores quis sint cupiditate placeat sit autem earum iure.');
INSERT INTO posts ( title, body )
VALUES ('Officiis qui omnis.', 'Delectus consequuntur fuga. Accusamus et rerum totam veniam sapiente accusamus blanditiis quaerat. Facilis natus magnam sint.');
INSERT INTO posts ( title, body )
VALUES ('Sit est qui veritatis velit quia.', 'Omnis necessitatibus vel impedit quam quia repellat dolores reprehenderit. Impedit dolores dolores tenetur dolorem mollitia esse incidunt nam. Ut id deleniti sed magni assumenda magnam.');
INSERT INTO posts ( title, body )
VALUES ('Perspiciatis autem eum voluptatum cupiditate a cupiditate.', 'Veritatis corrupti ut neque quisquam aut. Aut fuga velit est voluptatem. Voluptatem libero ut.');
INSERT INTO posts ( title, body )
VALUES ('Amet maiores porro nihil earum.', 'Odio repellendus enim quibusdam minima rem. Nihil aperiam est. Magni vel id alias enim mollitia. Accusantium consequatur cupiditate dolor quas quia qui ea quod accusamus.');
INSERT INTO posts ( title, body )
VALUES ('Iste ut quia quo incidunt doloribus.', 'Molestias sed omnis sint aliquam blanditiis itaque nisi possimus quo. Necessitatibus magnam architecto vel dolorem possimus. Odit fugiat qui perspiciatis iste voluptatibus. Incidunt et nobis doloremque hic aut.');
INSERT INTO posts ( title, body )
VALUES ('Est consequatur et eum quo ut consequuntur consectetur voluptas delectus.', 'Sed dolore provident quis ipsa quo totam voluptatem facilis. Omnis aperiam est consequatur molestias corporis optio. Aut illo sequi. Consequatur rem repudiandae. Sint aliquid expedita ut. Rem ea qui quam.');
INSERT INTO posts ( title, body )
VALUES ('Animi atque voluptatem omnis et.', 'Molestias nihil est sed quas ratione totam et sint. Harum enim aut sapiente corrupti fugiat soluta. Sunt deserunt odio et. Odio laborum qui voluptatem facilis architecto ipsa a.');
INSERT INTO posts ( title, body )
VALUES ('Sunt ea omnis omnis cumque laborum rerum quaerat.', 'Sint ut consequatur placeat delectus excepturi dolor dicta magnam voluptatibus. Aliquam consectetur iure quis ad ipsum animi corrupti vel ex. Qui delectus nisi autem sed animi et eaque non laudantium. Perferendis cumque et at cupiditate omnis dolorem eveniet. Ut eos sunt est eveniet dolore. Ab ipsa est fuga possimus voluptas voluptas similique blanditiis temporibus.');
INSERT INTO posts ( title, body )
VALUES ('Qui repudiandae id ad veritatis aut quos dolores consequatur.', 'Minus qui et. Aut voluptas tempore quia. Quia pariatur qui ullam atque nisi et. Vitae corporis eaque magnam expedita expedita.');
INSERT INTO posts ( title, body )
VALUES ('Voluptas eum exercitationem nostrum.', 'Laboriosam architecto aut minus eum soluta nihil. Quo in aliquid nobis non molestiae. Eos a voluptatum dolores ipsam ut nesciunt. Quisquam distinctio sit recusandae aspernatur illum ullam vitae reiciendis. Sint cupiditate aspernatur non voluptatem aliquid inventore. Iste quasi vel ut eum.');
INSERT INTO posts ( title, body )
VALUES ('Quidem dolores voluptas non sed repellat voluptatem.', 'Exercitationem nisi vitae corporis dolorem fuga. Velit totam repudiandae perspiciatis eius. Officiis ducimus aut. Dolorem suscipit exercitationem aliquam numquam eligendi. Repellendus et dolore tempore qui ipsum.');
INSERT INTO posts ( title, body )
VALUES ('Impedit suscipit odio debitis omnis quod veniam quasi.', 'Cumque dolor est culpa beatae. Atque aut sequi similique. Nulla non numquam nesciunt amet rerum nemo. Quod modi enim pariatur dolor debitis eaque aspernatur architecto vero. Alias animi id expedita neque culpa soluta voluptatem. Exercitationem voluptates quibusdam corrupti.');
INSERT INTO posts ( title, body )
VALUES ('Est mollitia ea vel nesciunt iusto sed itaque.', 'Maxime non quia voluptas nemo. Quam omnis ea autem error ratione. Facere quisquam est quis voluptate voluptatum minima reiciendis perspiciatis molestias. Officiis assumenda omnis iste debitis. Architecto odit adipisci est fugit ratione quisquam fugiat rerum. Laudantium aut adipisci veniam est.');
INSERT INTO posts ( title, body )
VALUES ('Soluta debitis occaecati est alias.', 'Similique dolores necessitatibus consequatur vel eum eaque. Et et quibusdam ducimus libero. Et atque eum occaecati laboriosam assumenda rerum necessitatibus. Unde modi quam qui. Non excepturi molestiae placeat deleniti vel et. Alias culpa et maxime quam.');
INSERT INTO posts ( title, body )
VALUES ('Aut eligendi quis dolorum deserunt animi consequuntur molestiae culpa.', 'Atque ut voluptates consequuntur eos nesciunt aut rerum ut et. Aperiam explicabo ipsa. Est mollitia qui repudiandae reiciendis et eum ut architecto. Voluptatibus illum totam. Cupiditate aut ex ut fugiat facere in assumenda. Autem magnam quos tempora in eos et ad.');
INSERT INTO posts ( title, body )
VALUES ('Dolore facilis ab expedita ut.', 'Hic numquam sit voluptate quia quam. Ratione nihil dicta. Aliquam aperiam aut eveniet consequatur ut qui provident reprehenderit. Ea nesciunt sed omnis sed voluptatem qui voluptatem sit. Et ut in quam id doloremque voluptatem aut sint. Sit natus et sit officia.');
INSERT INTO posts ( title, body )
VALUES ('Quo et et et autem excepturi qui eius deleniti.', 'Et et provident vel beatae aut molestias blanditiis maiores dolore. Aut esse quis doloribus dolores velit. Cumque neque dignissimos veritatis quasi.');
INSERT INTO posts ( title, body )
VALUES ('Ut nemo eaque.', 'Officiis voluptatem non nostrum in maxime. Quia deserunt enim velit quo sunt enim sunt doloribus. Dolores qui culpa impedit assumenda delectus voluptatem veniam qui quidem. Dignissimos et atque est similique id dignissimos debitis accusamus repellendus. Blanditiis dolorum delectus dolorum labore sapiente officiis illum asperiores asperiores. Quod non labore id expedita occaecati.');
INSERT INTO posts ( title, body )
VALUES ('Aut at id dolor.', 'Corporis quasi quas qui ut. Necessitatibus ut voluptatem repudiandae accusamus suscipit quae sed placeat voluptatum. Enim laborum fugit veniam nesciunt velit nihil.');
INSERT INTO posts ( title, body )
VALUES ('Quibusdam maxime minus neque quisquam tempora.', 'Cupiditate odio non exercitationem inventore id. Eos consequuntur sed quis quas. Nemo velit qui consequatur distinctio quis nemo commodi iusto.');
INSERT INTO posts ( title, body )
VALUES ('Eum nesciunt autem maxime.', 'Sed qui non. Iusto aut et totam rerum amet iure. Porro eaque quod est est recusandae.');
INSERT INTO posts ( title, body )
VALUES ('Vero qui eius expedita.', 'Et vitae dolor et vero commodi in. Exercitationem impedit eveniet non sint recusandae dolorum odit. Ut ut est blanditiis ullam voluptatem odit. Voluptatem et rerum temporibus quo at. Qui mollitia ut officiis est rerum. Voluptatem quia et molestiae cum sequi vero repellendus unde.');
INSERT INTO posts ( title, body )
VALUES ('Eos veniam at nihil.', 'At sint quis accusantium minus. Eos reprehenderit blanditiis aliquam non id aliquam. Minima nihil voluptatem facilis et. Aut eos et ut quis voluptatum placeat. Explicabo et quo earum aut vel similique.');
INSERT INTO posts ( title, body )
VALUES ('Aliquid accusantium dolorem itaque harum et debitis minus corporis.', 'Sunt hic commodi nostrum. Enim quis ut hic voluptates aut. Atque explicabo neque blanditiis ipsum nesciunt eos dolorum. Expedita quod numquam mollitia voluptates et. Tempore aut placeat molestiae.');
INSERT INTO posts ( title, body )
VALUES ('Sit ut officia.', 'Quia non excepturi. Aliquam dolorem soluta aut. Sint deserunt voluptas qui.');
INSERT INTO posts ( title, body )
VALUES ('Doloremque minus velit a enim ullam.', 'Quia architecto atque consequuntur ea dicta ut saepe placeat. Nam autem a neque debitis eos et soluta et distinctio. Delectus corrupti magnam cupiditate nemo. Rerum commodi expedita molestias praesentium quis aliquid quos accusamus. Sint tempore sunt ut non optio.');
INSERT INTO posts ( title, body )
VALUES ('Voluptatem consequatur architecto iusto cumque qui delectus.', 'Libero ex reprehenderit aspernatur magnam ut corporis. Asperiores fuga dolorum id perspiciatis facilis suscipit aut. Dolor nihil provident aliquam.');
INSERT INTO posts ( title, body )
VALUES ('Perspiciatis cum aliquid.', 'Sed dolores rerum quaerat sit qui at qui. Ratione aut fuga id ea voluptate. Sequi corrupti eos vitae natus in nostrum accusantium cupiditate voluptates. Hic omnis non eos mollitia. Cum et eaque et sunt alias corrupti.');
INSERT INTO posts ( title, body )
VALUES ('Odit et dicta quidem magni.', 'Est et suscipit est non sit. Dolores quaerat eveniet porro non dolor sapiente corrupti est. Amet quia architecto et dolor.');
INSERT INTO posts ( title, body )
VALUES ('Exercitationem totam quasi.', 'Id enim totam nisi deleniti excepturi rerum. Velit quia sequi nihil. Cupiditate molestias qui amet vel autem. Pariatur quam asperiores officia sed sint illum deserunt.');
INSERT INTO posts ( title, body )
VALUES ('Et et quam dolorem ut.', 'Et laudantium omnis dolor sed dignissimos odio blanditiis. Eius consequuntur recusandae nisi officiis tempore. Voluptatem earum incidunt odio sit ut. Maiores eos voluptas iste.');
INSERT INTO posts ( title, body )
VALUES ('Sunt quia doloribus quos vitae ratione mollitia perferendis tenetur soluta.', 'Quia distinctio ut in officia soluta. Expedita excepturi voluptas. Eaque alias reprehenderit accusantium nulla fugiat ullam laboriosam. Et et minus sint optio harum et sit. Assumenda ullam rerum. Suscipit accusantium molestiae quas quod quia voluptates eum sit quia.');
INSERT INTO posts ( title, body )
VALUES ('Iure pariatur molestias laudantium recusandae et ratione dolorem est neque.', 'Aliquam officia delectus vel quam deserunt excepturi nam odio placeat. Quia corrupti ut ratione. Ut qui exercitationem qui numquam id qui tempora tenetur dignissimos. Esse recusandae culpa dolor aut enim natus accusamus dolor.');
INSERT INTO posts ( title, body )
VALUES ('Molestiae velit maiores provident est voluptatum rerum error.', 'Commodi veritatis neque culpa. Incidunt rerum expedita qui culpa ratione est. Est inventore similique quia quod ut esse. Eveniet quae consequatur. Aut qui nostrum distinctio laboriosam non impedit.');
INSERT INTO posts ( title, body )
VALUES ('Assumenda in voluptate culpa quia.', 'Sit minus voluptatem et commodi. Qui quia sit dolorum rerum rem consequatur ut eligendi. Itaque sunt eos nulla vel suscipit corporis ipsum.');
INSERT INTO posts ( title, body )
VALUES ('Voluptas est itaque odit reprehenderit ut dolore aliquam.', 'Commodi eos adipisci molestiae necessitatibus dolorem aliquam numquam consequuntur. Quidem accusantium est culpa qui laborum adipisci debitis. Officia ut maiores tenetur. Ratione quia maxime ut est porro nihil recusandae. Fugit quia sequi dolores.');
INSERT INTO posts ( title, body )
VALUES ('Atque commodi neque eligendi.', 'Ea placeat cumque reprehenderit in. Facilis voluptate id eligendi esse aut nostrum aspernatur laboriosam. Adipisci quia doloremque qui.');
INSERT INTO posts ( title, body )
VALUES ('Tempore quos quam quisquam nisi quam sit.', 'Enim nisi incidunt repudiandae magni eaque qui corporis. Cum voluptas hic vero nobis eos qui voluptatibus alias et. Vel veniam quidem quas amet ratione et. Nobis et commodi ullam.');
INSERT INTO posts ( title, body )
VALUES ('Sit rem dolorem voluptates.', 'Suscipit eius molestiae qui eaque. Maxime exercitationem veniam a. Sit impedit tempore. Ratione qui reiciendis similique quae quia unde. Fuga dolores laboriosam magnam sapiente optio voluptatem.');
INSERT INTO posts ( title, body )
VALUES ('Sint consequatur odit.', 'Laboriosam asperiores cupiditate est voluptatem. Ratione alias enim cumque provident sed omnis et laborum. Veniam sint exercitationem quia tempore. Earum voluptatem aut aperiam expedita ut iure.');
INSERT INTO posts ( title, body )
VALUES ('Tenetur repudiandae autem ullam.', 'Quibusdam quis ut ab et enim dicta delectus quaerat. Maxime aut magni odit et. Veritatis quidem harum assumenda perspiciatis.');
INSERT INTO posts ( title, body )
VALUES ('Recusandae commodi magnam est et fugiat iure earum est et.', 'Ipsum dolorum sint qui sunt dolorum. Nisi dolor suscipit sed. Possimus molestiae dolores consequatur. A consequatur voluptatem enim harum in. Dignissimos fugiat qui rem suscipit quia atque sapiente. Voluptatem ex voluptatum ex voluptatem sed.');
INSERT INTO posts ( title, body )
VALUES ('Sed aut quae voluptas.', 'Et qui sequi labore quaerat magni magnam ut. Nisi aut rerum ducimus ratione. Ut ab consequatur quo excepturi error et a omnis itaque. Possimus ex est non facilis odit fuga quia velit.');
INSERT INTO posts ( title, body )
VALUES ('Voluptates culpa rerum recusandae itaque nemo amet sint.', 'Fugit adipisci necessitatibus dolores optio magni molestiae ullam beatae. Minus voluptas fuga magni impedit magni. Pariatur facilis sequi adipisci qui adipisci dicta non eveniet velit.');
INSERT INTO posts ( title, body )
VALUES ('Temporibus aut excepturi animi similique est quidem incidunt amet ipsam.', 'Voluptates iusto voluptatem explicabo magni. Voluptas illum ducimus. Dolores accusantium voluptatem officia. Iure iure maxime voluptas aut molestiae voluptatem. Ut repudiandae totam. Quo est enim quis fuga nostrum impedit.');
INSERT INTO posts ( title, body )
VALUES ('Est perspiciatis ducimus error quia voluptatem.', 'Occaecati tempore aut. Voluptas nam dicta. Distinctio porro velit quasi alias dolorem. Aut labore rerum quod id voluptatem placeat aut est voluptas. Qui minima aut aut doloribus quia necessitatibus amet voluptatem ex.');
INSERT INTO posts ( title, body )
VALUES ('Accusantium iusto et quis atque molestiae quia dolorum.', 'Eum ducimus ex eaque expedita ipsam error voluptatem vitae. Earum deserunt voluptas. Voluptatem dolorem harum totam ut et beatae aut. Placeat ea ut pariatur provident libero. Accusantium fugiat iure quam vero sint et. Enim id qui.');
INSERT INTO posts ( title, body )
VALUES ('Iure consequatur ipsum quidem repellendus fugiat enim modi.', 'Saepe et eos. Sunt dolorem voluptate voluptas libero occaecati beatae culpa. Eligendi dolorem omnis quam. Perferendis non et quis non est praesentium sed vitae. Assumenda facilis in ducimus debitis dolore.');
INSERT INTO posts ( title, body )
VALUES ('Qui et quibusdam laudantium aliquam.', 'Fugiat vero quo cumque facilis magnam qui voluptatem quo. Delectus eaque sed dolorem rerum. Incidunt quisquam quo veniam omnis itaque et sint rerum amet. Et in quo. Id ex voluptatibus.');
INSERT INTO posts ( title, body )
VALUES ('Omnis itaque ea eveniet cumque eos ex ipsa.', 'Maxime nisi ea perspiciatis dolorem laudantium nulla labore eos. Impedit velit autem magnam corporis nemo molestiae quia. Est cum suscipit.');





---------------------------------------------------------------------------

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);
