// DocSection: managing_navigation_articles_depth
// Tip: Find more about Java/JavaRx SDKs at https://docs.kontent.ai/java
import com.github.kentico.kontent.delivery;

DeliveryClient client = new DeliveryClient("24246f25-946d-4ab4-b170-fadef22fe7b2");

List<NameValuePair> params = DeliveryParameterBuilder.params().modularContentDepth(5).build();

// Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
ArticleItem item = client.getItem("root_navigation_item", NavigationItemItem.class, params);
// EndDocSection